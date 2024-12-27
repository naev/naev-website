---
title: Downloads
---

<%
   # Set the version here
   version = "0.12.1"
%>

You can download Naev from the following sources:

<%= badge( "github", version ) %>
<%= badge( "steam" ) %>
<%= badge( "itchio" ) %>
<%= badge( "flathub" ) %>

You can also get ahold of Naev from most linux package managers: <%= badge( "repology" ) %>

A list of all downloads can be found at [Github](https://github.com/naev/naev/releases). See bottom for platform-specific instructions.

<div class="my-4 list-group" id="download-list">
 <button type="button" class="list-group-item list-group-item-action active" disabled>Current (<%=version%>)</button>
 <a class='list-group-item list-group-item-action' href='https://github.com/naev/naev/releases/download/v<%=version%>/naev-<%=version%>-win64.exe'>Windows 64-bit</a>
 <a class='list-group-item list-group-item-action' href='https://github.com/naev/naev/releases/download/v<%=version%>/naev-<%=version%>-macos-universal.dmg'>macOS Universal</a>
 <a class='list-group-item list-group-item-action' href='https://github.com/naev/naev/releases/download/v<%=version%>/naev-<%=version%>-linux-x86-64.AppImage'>Linux 64-bit AppImage</a>
 <a class='list-group-item list-group-item-action' href='https://github.com/naev/naev/releases/download/v<%=version%>/naev-<%=version%>-source.tar.xz'>Source Code</a>
</div>

<div class="my-4 card">
 <div class="card-header">
 Instructions
 </div>
 <div class="card-body">
  <ul class="nav nav-tabs" role="tablist">
   <li class="nav-item">
    <a class="nav-link active" id="windows-tab" data-toggle="tab" href="#windows-desc" role="tab" aria-selected="true">Windows</a>
   </li>
   <li class="nav-item">
    <a class="nav-link" id="macos-tab" data-toggle="tab" href="#macos-desc" role="tab" aria-selected="false">macOS</a>
   </li>
   <li class="nav-item">
    <a class="nav-link" id="linux-tab" data-toggle="tab" href="#linux-desc" role="tab" aria-selected="false">Linux</a>
   </li>
  </ul>
  <div class="m-2 tab-content">
   <div class="tab-pane fade show active" id="windows-desc" role="tabpanel" aria-labelledby="windows-tab" markdown=1>
Download and run the Naev installer.

You can use this installer to extract Naev to a portable install location if needed.
   </div>
   <div class="tab-pane fade" id="macos-desc" role="tabpanel" aria-labelledby="macos-tab" markdown=1>
Download the release dmg, and click it to open. You can drag Naev to your applications folder.

This package supports both Apple Silicon and Intel Macs.
Requires macOS 12.0 for Apple Silicon Macs, and macOS 10.13 for Intel Macs.

If you are running MacOS Catalina or newer you will have to bypass Gatekeeper: See the [Naev FAQ](https://github.com/naev/naev/wiki/FAQ#i-see-a-warning-message-and-cant-run-naev-on-macos) for details.
   </div>
   <div class="tab-pane fade" id="linux-desc" role="tabpanel" aria-labelledby="linux-tab" markdown=1>
64-bit AppImages are available above, these can be marked as executable and bundle all dependencies and data required to play.
<!--Ubuntu users can install Naev through the [Playdeb package](http://www.playdeb.net/software/NAEV). If you’re unfamiliar, instructions can be found [here](http://www.playdeb.net/updates/Ubuntu/#how_to_install).-->

Naev has been packaged by Ubuntu, Debian, Gentoo, Arch Linux, openSUSE, Fedora, Manjaro, and OpenBSD as naev.

<!--If you’re using our official binaries, make sure to install the dependencies. -->
   </div>
  </div>
 </div>
</div>
