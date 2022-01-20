---
title: Downloads
---

<%
   # Set the version here
   version = "0.9.2"
%>

Naev can be acquired from the following sources:

[![Get - Github](https://img.shields.io/static/v1?label=Get&message=Github&color=2ea44f&style=for-the-badge&logo=github)](https://github.com/naev/naev/releases/v<%=version%>)
[![Get - Steam](https://img.shields.io/static/v1?label=Get&message=Steam&color=black&style=for-the-badge&logo=steam)](https://store.steampowered.com/app/598530/Naev)
[![Get - Itch.io](https://img.shields.io/static/v1?label=Get&message=Itch.io&color=%23FA5C5C&style=for-the-badge&logo=itch.io&logoColor=https%3A%2F%2Fnaev.itch.io%2Fnaev)](https://naev.itch.io/naev)
[![Get - Flathub](https://img.shields.io/static/v1?label=Get&message=Flathub&color=%234A86CF&style=for-the-badge&logo=flathub&logoColor=white)](https://flathub.org/apps/details/org.naev.Naev)

You can also get ahold of Naev from most linux package managers: [![latest packaged version(s)](https://repology.org/badge/latest-versions/naev.svg)](https://repology.org/project/naev/versions)

A list of all downloads can be found at [Github](https://github.com/naev/naev/releases). See bottom for platform-specific instructions.

<div class="my-4 list-group" id="download-list">
 <button type="button" class="list-group-item list-group-item-action active" disabled>Current (<%=version%>)</button>
 <a class='list-group-item list-group-item-action' href='https://github.com/naev/naev/releases/download/v<%=version%>/naev-<%=version%>-win64.exe'>Windows 64-bit</a>
 <a class='list-group-item list-group-item-action' href='https://github.com/naev/naev/releases/download/v<%=version%>/naev-<%=version%>-macos.dmg'>macOS 64-bit</a>
 <a class='list-group-item list-group-item-action' href='https://github.com/naev/naev/releases/download/v<%=version%>/naev-<%=version%>-linux-x86-64.AppImage'>Linux 64-bit AppImage</a>
 <a class='list-group-item list-group-item-action' href='https://github.com/naev/naev/releases/download/v<%=version%>/naev-<%=version%>-source.tar.gz'>Source Code</a>
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

If you are running MacOS Catalina or newer you may have to bypass Gatekeeper: See the [Naev FAQ](https://github.com/naev/naev/wiki/FAQ#i-see-a-warning-message-and-cant-run-naev-on-macos) for details.
   </div>
   <div class="tab-pane fade" id="linux-desc" role="tabpanel" aria-labelledby="linux-tab" markdown=1>
64-bit AppImages are available above, these can be marked as executable and bundle all dependencies and data required to play.
<!--Ubuntu users can install Naev through the [Playdeb package](http://www.playdeb.net/software/NAEV). If you’re unfamiliar, instructions can be found [here](http://www.playdeb.net/updates/Ubuntu/#how_to_install).-->

We have been packaged by Ubuntu, Debian, Gentoo, Arch Linux, openSUSE, Fedora, Manjaro, and OpenBSD as naev.

<!--If you’re using our official binaries, make sure to install the dependencies. -->
   </div>
  </div>
 </div>
</div>
