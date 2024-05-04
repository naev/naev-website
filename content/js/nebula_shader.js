let gl, program, buffer;

const vertexShaderSource = `
    attribute vec2 position;
    void main() {
        gl_Position = vec4(position, 0.0, 1.0);
    }
`;

const fragmentShaderSource = `
    precision mediump float; // Specify precision for float variables

    const int ITERATIONS = 3;
    const float SCALAR = pow(2.0, 4.0/3.0); // Ensure constants have the correct type

    uniform mat4 projection;
    uniform float eddy_scale;
    uniform float u_time;

    vec3 mod289(vec3 x) {
       return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 mod289(vec4 x) {
       return x - floor(x * (1.0 / 289.0)) * 289.0;
    }

    vec4 permute(vec4 x) {
       return mod289(((x*34.0)+1.0)*x);
    }

    vec4 taylorInvSqrt(vec4 r) {
       return 1.79284291400159 - 0.85373472095314 * r;
    }

    vec3 fade(vec3 t) {
       return t*t*t*(t*(t*6.0-15.0)+10.0);
    }

    float cnoise(vec3 P) {
       vec3 Pi0 = floor(P);
       vec3 Pi1 = Pi0 + vec3(1.0);
       
       vec3 Pf0 = fract(P);
       vec3 Pf1 = Pf0 - vec3(1.0);
       
       vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
       vec4 iy = vec4(Pi0.yy, Pi1.yy);
       vec4 iz0 = Pi0.zzzz;
       vec4 iz1 = Pi1.zzzz;
       
       vec4 ixy = permute(permute(ix) + iy);
       vec4 ixy0 = permute(ixy + iz0);
       vec4 ixy1 = permute(ixy + iz1);
       
       vec4 gx0 = ixy0 * (1.0 / 7.0);
       vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
       gx0 = fract(gx0);
       vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
       vec4 sz0 = step(gz0, vec4(0.0));
       gx0 -= sz0 * (step(0.0, gx0) - 0.5);
       gy0 -= sz0 * (step(0.0, gy0) - 0.5);
       
       vec4 gx1 = ixy1 * (1.0 / 7.0);
       vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
       gx1 = fract(gx1);
       vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
       vec4 sz1 = step(gz1, vec4(0.0));
       gx1 -= sz1 * (step(0.0, gx1) - 0.5);
       gy1 -= sz1 * (step(0.0, gy1) - 0.5);
       
       vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
       vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
       vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
       vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
       vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
       vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
       vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
       vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
       
       vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
       g000 *= norm0.x;
       g010 *= norm0.y;
       g100 *= norm0.z;
       g110 *= norm0.w;
       
       vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
       g001 *= norm1.x;
       g011 *= norm1.y;
       g101 *= norm1.z;
       g111 *= norm1.w;
       
       float n000 = dot(g000, Pf0);
       float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
       float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
       float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
       float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
       float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
       float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
       float n111 = dot(g111, Pf1);
       
       vec3 fade_xyz = fade(Pf0);
       vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
       vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
       float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
       return 2.2 * n_xyz;
    }
    vec4 effect(vec4 col_in, vec2 texture_coords, vec2 screen_coords ) {
       float f = 0.0;
       vec3 uv;

       // Calculate coordinates
       uv.xy = screen_coords / eddy_scale;
       uv.z = u_time / 5.0;

       // Create the noise
       for (int i=0; i<ITERATIONS; i++) {
          float scale = pow(SCALAR, float(i));
          f += abs( cnoise( uv * scale ) ) / scale;
       }

       vec4 colour =  mix( vec4(0.0,0.0,0.0,1.0), col_in, 0.1 + f );

       return colour;
    }

    void main() {
       gl_FragColor = effect(vec4(0.0,0.0,1.0,1.0), gl_FragCoord.xy, gl_FragCoord.xy);
    }
`;

function compileShader(gl, source, type) {
    let shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Error compiling shader:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

function createProgram(gl, vertexShaderSource, fragmentShaderSource) {
    let vertexShader = compileShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
    let fragmentShader = compileShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);
    let program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Error linking program:', gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
    }
    return program;
}

function getParentContainerSize(element) {
    let parent = element.parentElement;
    let parentStyle = window.getComputedStyle(parent);
    let width = parseFloat(parentStyle.getPropertyValue('width'));
    let height = parseFloat(parentStyle.getPropertyValue('height'));
    return { width, height };
}

function resizeCanvas() {
    let canvas = document.getElementById('nebula-canvas');
    let containerSize = getParentContainerSize(canvas);

    canvas.width = containerSize.width;
    canvas.height = containerSize.height;
    gl.viewport(0, 0, canvas.width, canvas.height);
}

function init() {
    let canvas = document.getElementById('nebula-canvas');
    gl = canvas.getContext('webgl');

    if (!gl) {
        console.error('WebGL not supported');
        return;
    }

    program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
    if (!program) {
        return;
    }

    gl.useProgram(program);

    buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 3, 3, -1]), gl.STATIC_DRAW);

    let positionAttrib = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionAttrib);
    gl.vertexAttribPointer(positionAttrib, 2, gl.FLOAT, false, 0, 0);

    gl.uniform1f(gl.getUniformLocation(program, 'eddy_scale'), 50.0);

    resizeCanvas(); // Call resizeCanvas initially
    window.addEventListener('resize', resizeCanvas); // Resize canvas when window is resized

    let startTime = performance.now();
    let lastRenderTime = 0;
    const refreshRate = 1000 / 15; // Limit to 15 frames per second to reduce performance impact
        
    function renderCanvas(currentTime) {
        if (currentTime - lastRenderTime >= refreshRate) {
            const time = (performance.now() - startTime) / 1000;
            gl.uniform1f(gl.getUniformLocation(program, 'u_time'), time);
    
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
    
            gl.drawArrays(gl.TRIANGLES, 0, 3);
        
            lastRenderTime = currentTime;
        }
        
        requestAnimationFrame(renderCanvas);
    }
        
    // Start rendering loop
    requestAnimationFrame(renderCanvas);
}

init();