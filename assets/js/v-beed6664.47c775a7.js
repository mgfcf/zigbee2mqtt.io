"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[29296],{613420:(e,r,a)=>{a.r(r),a.d(r,{data:()=>t});const t=JSON.parse('{"key":"v-beed6664","path":"/guide/adapters/emberznet.html","title":"EmberZNet adapters (Silicon Labs)","lang":"en-US","frontmatter":{"pageClass":"content-page"},"excerpt":"","headers":[{"level":3,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":3,"title":"Firmware flashing","slug":"firmware-flashing","link":"#firmware-flashing","children":[]},{"level":2,"title":"Recommended","slug":"recommended","link":"#recommended","children":[{"level":3,"title":"USB","slug":"usb","link":"#usb","children":[]},{"level":3,"title":"Network (TCP)","slug":"network-tcp","link":"#network-tcp","children":[]},{"level":3,"title":"Hybrid (USB + Network)","slug":"hybrid-usb-network","link":"#hybrid-usb-network","children":[]},{"level":3,"title":"Hub","slug":"hub","link":"#hub","children":[]},{"level":3,"title":"Custom","slug":"custom","link":"#custom","children":[]}]},{"level":2,"title":"Not recommended","slug":"not-recommended","link":"#not-recommended","children":[]},{"level":2,"title":"Logging specific to this stack","slug":"logging-specific-to-this-stack","link":"#logging-specific-to-this-stack","children":[{"level":3,"title":"info level","slug":"info-level","link":"#info-level","children":[]},{"level":3,"title":"warning level","slug":"warning-level","link":"#warning-level","children":[]},{"level":3,"title":"error level","slug":"error-level","link":"#error-level","children":[]}]}],"git":{"updatedTime":1717095267000},"filePathRelative":"guide/adapters/emberznet.md"}')},81009:(e,r,a)=>{a.r(r),a.d(r,{default:()=>He});var t=a(166252);const n=a.p+"assets/img/skyconnect_isometric.24855e98.jpg",l=a.p+"assets/img/smlight-slzb-07.7ff5780d.jpg",s=a.p+"assets/img/tubezb-mgm24-poe.0b21d5ef.jpg",i=a.p+"assets/img/smlight-slzb-06mg24.a86095b2.jpg",o=a.p+"assets/img/yellow.b2cc4373.jpg",d=(0,t.uE)('<h1 id="emberznet-adapters-silicon-labs" tabindex="-1"><a class="header-anchor" href="#emberznet-adapters-silicon-labs" aria-hidden="true">#</a> EmberZNet adapters (Silicon Labs)</h1><p>Currently supported firmware version: 7.4.0, 7.4.1</p><p>Firmware release notes: https://www.silabs.com/developers/zigbee-emberznet?tab=documentation</p><p><em>Multiprotocol is not currently supported due to the various issues associated with it. The recommended alternative to establish multiple networks is to use one adapter per protocol.</em></p><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token key atrule">adapter</span><span class="token punctuation">:</span> ember\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',6),u={class:"custom-container tip"},p=(0,t._)("p",{class:"custom-container-title"},"TIP",-1),c={href:"https://github.com/darkxst/silabs-firmware-builder/tree/ember-nohw/firmware_builds/",target:"_blank",rel:"noopener noreferrer"},h=(0,t.uE)('<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token key atrule">rtscts</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',1),m=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("p",{class:"custom-container-title"},"TIP"),(0,t._)("p",null,[(0,t.Uk)("The use of "),(0,t._)("code",null,"adapter: ezsp"),(0,t.Uk)(" is now deprecated. See https://github.com/Koenkk/zigbee2mqtt/discussions/21462")])],-1),b=(0,t._)("h3",{id:"firmware-flashing",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#firmware-flashing","aria-hidden":"true"},"#"),(0,t.Uk)(" Firmware flashing")],-1),g={href:"https://github.com/darkxst/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://darkxst.github.io/silabs-firmware-builder/",target:"_blank",rel:"noopener noreferrer"},f=(0,t._)("li",null,"Nabu Casa Home Assistant: https://skyconnect.home-assistant.io/firmware-update/",-1),k=(0,t._)("li",null,"SMLight: https://smlight.tech/flasher/",-1),w={href:"https://github.com/NabuCasa/universal-silabs-flasher",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.silabs.com/developers/simplicity-studio",target:"_blank",rel:"noopener noreferrer"},v={href:"https://docs.silabs.com/simplicity-studio-5-users-guide/latest/",target:"_blank",rel:"noopener noreferrer"},y=(0,t._)("li",null,'Some Ethernet adapters support flashing Zigbee firmware over their own web-interface. In this case you do not need any external software and hardware. Just go to the webinterface and press "Update Zigbee firmware". Please refer to the manual of your particular Zigbee adapter for this functionality.',-1),U=(0,t._)("h2",{id:"recommended",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#recommended","aria-hidden":"true"},"#"),(0,t.Uk)(" Recommended")],-1),_=(0,t._)("h3",{id:"usb",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#usb","aria-hidden":"true"},"#"),(0,t.Uk)(" USB")],-1),R=(0,t._)("summary",null,"Sonoff ZBDongle-E (V2 model, EFR32MG21)",-1),B=(0,t._)("p",null,"With external antenna.",-1),W={href:"https://sonoff.tech/product/gateway-and-sensors/sonoff-zigbee-3-0-usb-dongle-plus-e/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://sonoff.tech/product-review/how-to-use-sonoff-dongle-plus-on-home-assistant-how-to-flash-firmware/",target:"_blank",rel:"noopener noreferrer"},z={href:"https://sonoff.tech/wp-content/uploads/2022/08/SONOFF-Zigbee-3.0-USB-dongle-plus-firmware-flashing-.pdf",target:"_blank",rel:"noopener noreferrer"},P={href:"https://itead.cc/product/zigbee-3-0-usb-dongle/",target:"_blank",rel:"noopener noreferrer"},S=(0,t._)("img",{src:"data:image/jpeg;base64,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",width:"200"},null,-1),C=(0,t.uE)('<summary>Nabu Casa Home Assistant SkyConnect (EFR32MG21)</summary><p>With integrated antenna and hardware flow control support.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token key atrule">rtscts</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',3),T={href:"https://www.home-assistant.io/skyconnect",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/NabuCasa/silabs-firmware",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://skyconnect.home-assistant.io/",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.home-assistant.io/skyconnect",target:"_blank",rel:"noopener noreferrer"},L=(0,t._)("img",{src:n,width:"200"},null,-1),Z=(0,t.uE)('<summary>SMLIGHT SLZB-07 (EFR32MG21)</summary><p>With external antenna and hardware flow control support.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token key atrule">rtscts</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',3),D={href:"https://smlight.tech/product/slzb-07/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://smartlight.me/smart-home-devices/zigbee-devices/slzb-07-zigbee-usb-adapter-en",target:"_blank",rel:"noopener noreferrer"},O={href:"https://www.aliexpress.com/item/1005006273914143.html",target:"_blank",rel:"noopener noreferrer"},q=(0,t._)("br",null,null,-1),j={href:"https://shop.dialedin.com.au/products/smlight-slzb-07-usb-zigbee-adapter",target:"_blank",rel:"noopener noreferrer"},H={href:"https://www.hobbyelectronica.nl/product/slzb-07-zigbee-coordinator-usb/",target:"_blank",rel:"noopener noreferrer"},J={href:"https://www.domadoo.fr/fr/interface-domotique/7044-smlight-dongle-usb-zigbee-efr32mg21-cp2102n-soc-antenne-3db-zigbee2mqtt-et-zha.html",target:"_blank",rel:"noopener noreferrer"},F={href:"https://pcblab.io/szukaj?controller=search&s=slzb",target:"_blank",rel:"noopener noreferrer"},G={href:"https://www.amazon.com/LOAMLIN-SMLIGHT-SLZB-07-Zigbee-Coordinator/dp/B0CNVBCCR3",target:"_blank",rel:"noopener noreferrer"},V=(0,t._)("img",{src:l,width:"200"},null,-1),X=(0,t._)("h3",{id:"network-tcp",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#network-tcp","aria-hidden":"true"},"#"),(0,t.Uk)(" Network (TCP)")],-1),Y=(0,t._)("summary",null,"TubeZB EFR32 MGM24 POE (MGM240PB32VNN)",-1),K=(0,t._)("p",null,"With external antenna.",-1),$={href:"https://tubeszb.com/product/efr32-mgm24-poe-coordinator/",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://tubeszb.com/product/efr32-mgm24-poe-coordinator/",target:"_blank",rel:"noopener noreferrer"},re=(0,t._)("img",{src:s,width:"200"},null,-1),ae=(0,t._)("h3",{id:"hybrid-usb-network",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#hybrid-usb-network","aria-hidden":"true"},"#"),(0,t.Uk)(" Hybrid (USB + Network)")],-1),te=(0,t._)("summary",null,"SMLIGHT SLZB-06M (EFR32MG21)",-1),ne=(0,t._)("p",null,"With external antenna.",-1),le=(0,t._)("p",null,[(0,t._)("strong",null,"For optimal performance, ensure your firmware is at least version 20240510 (requires Core firmware version 2.2.0 or higher). Not suitable for WiFi or other high latency connections.")],-1),se={href:"https://github.com/darkxst/silabs-firmware-builder/raw/main/firmware_builds/slzb-06m/ncp-uart-hw-v7.4.1.0-slzb-06m-115200.gbl",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://smlight.tech/product/slzb-06m/",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://smartlight.me/smart-home-devices/zigbee-devices/slzb-06m-zigbee-adapter",target:"_blank",rel:"noopener noreferrer"},de={href:"https://www.aliexpress.com/item/1005004942648430.html",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://www.tindie.com/products/smartlightme/smlight-slzb-06-zigbee-ethernet-poe-usb-wifi-adapt/",target:"_blank",rel:"noopener noreferrer"},pe=(0,t._)("br",null,null,-1),ce={href:"https://shop.dialedin.com.au/products/smlight-slzb-06m-efr32mg21-lan-zigbee-adapter",target:"_blank",rel:"noopener noreferrer"},he={href:"https://www.hobbyelectronica.nl/product/slzb-06m-zigbee-ethernet-poe-usb-adapter/",target:"_blank",rel:"noopener noreferrer"},me={href:"https://www.hobbyelectronica.nl/product/slzb-06m-zigbee-ethernet-poe-usb-adapter/",target:"_blank",rel:"noopener noreferrer"},be={href:"https://shop.swiss-domotique.ch/en/gateways-antennas/2390-smlight-slzb-06m-adaptateur-zigbee-ethernet-poe-usb-wifi.html",target:"_blank",rel:"noopener noreferrer"},ge={href:"https://improveit.lt/produktas/smlight-slzb-06m-zigbee-ethernet-poe-usb-lan-wifi-adapteris-zha-integracijai/",target:"_blank",rel:"noopener noreferrer"},Ae={href:"https://www.domadoo.fr/fr/box-domotique/7043-smlight-adaptateur-usb-ethernet-poe-zigbee-30-efr32mg21-zigbee2mqtt-et-zha.html",target:"_blank",rel:"noopener noreferrer"},fe={href:"https://www.hobbyelectronica.nl/product/slzb-06m-zigbee-ethernet-poe-usb-adapter/",target:"_blank",rel:"noopener noreferrer"},ke={href:"https://improveit.lt/produktas/smlight-slzb-06m-zigbee-ethernet-poe-usb-lan-wifi-adapteris-zha-integracijai/",target:"_blank",rel:"noopener noreferrer"},we={href:"https://improveit.lt/produktas/smlight-slzb-06m-zigbee-ethernet-poe-usb-lan-wifi-adapteris-zha-integracijai/",target:"_blank",rel:"noopener noreferrer"},Ee={href:"https://pcblab.io/slzb-06m-adapter-zigbee-efr32mg21-ethernet-poe-usb-lan-wifi.html",target:"_blank",rel:"noopener noreferrer"},ve={href:"https://shopee.co.th/Zigbee-SLZB-06-LAN-POE-USB-WIFI-Hybrid-Coordinator-CC2652P-SMARTLIGHT-SLZB-06-HASS-Zigbee2mqtt-ZHA-CC2652-CC2531-i.25068823.21062349644",target:"_blank",rel:"noopener noreferrer"},ye={href:"https://cloudfree.shop/product/smlight-zigbee-ethernet-adapter/",target:"_blank",rel:"noopener noreferrer"},Ue={href:"https://www.amazon.com/SMLIGHT-SLZB-06-Ethernet-Zigbee2MQTT-Assistant/dp/B0BL6DQSB3",target:"_blank",rel:"noopener noreferrer"},_e=(0,t._)("img",{src:"https://smlight.tech/external-content/images/zigbee2mqtt-io/slzb-06m-main-title.jpg",width:"200"},null,-1),Re=(0,t._)("summary",null,"SMLIGHT SLZB-06mg24 (EFR32MG24)",-1),Be=(0,t._)("p",null,"With external antenna.",-1),We={href:"https://smlight.tech/product/slzb-06mg24/",target:"_blank",rel:"noopener noreferrer"},Ie=(0,t._)("li",null,"[Buy] UPCOMING",-1),ze=(0,t._)("img",{src:i,width:"200"},null,-1),Pe=(0,t._)("h3",{id:"hub",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#hub","aria-hidden":"true"},"#"),(0,t.Uk)(" Hub")],-1),Se=(0,t.uE)('<summary>Nabu Casa Home Assistant Yellow (MGM210P)</summary><p>With integrated antenna and hardware flow control support.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">serial</span><span class="token punctuation">:</span>\n  <span class="token key atrule">rtscts</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>',3),Ce={href:"https://www.home-assistant.io/yellow",target:"_blank",rel:"noopener noreferrer"},Te={href:"https://github.com/NabuCasa/silabs-firmware",target:"_blank",rel:"noopener noreferrer"},xe={href:"https://skyconnect.home-assistant.io/",target:"_blank",rel:"noopener noreferrer"},Qe={href:"https://www.home-assistant.io/yellow",target:"_blank",rel:"noopener noreferrer"},Me=(0,t._)("img",{src:o,width:"200"},null,-1),Le=(0,t._)("h3",{id:"custom",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#custom","aria-hidden":"true"},"#"),(0,t.Uk)(" Custom")],-1),Ze=(0,t._)("h2",{id:"not-recommended",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#not-recommended","aria-hidden":"true"},"#"),(0,t.Uk)(" Not recommended")],-1),De=(0,t._)("summary",null,"All Series 0/1 based-devices",-1),Ne=(0,t._)("p",null,"Older hardware.",-1),Oe={href:"https://www.silabs.com/documents/public/release-notes/emberznet-release-notes-7.4.3.0.pdf",target:"_blank",rel:"noopener noreferrer"},qe=(0,t.uE)('<details><summary>Easyiot ZB-GW04 (v1.1, v1.2)</summary><p>Low-resources hardware.</p></details><h2 id="logging-specific-to-this-stack" tabindex="-1"><a class="header-anchor" href="#logging-specific-to-this-stack" aria-hidden="true">#</a> Logging specific to this stack</h2><h3 id="info-level" tabindex="-1"><a class="header-anchor" href="#info-level" aria-hidden="true">#</a> <code>info</code> level</h3><p>The start and stop sequences describe the steps taken to get Zigbee2MQTT running with <code>ember</code> in more details. This should help to locate potential start and stop problems.</p><p>Stack/Network status changes (up/down, channel change, open/close from Permit Join, etc).</p><h3 id="warning-level" tabindex="-1"><a class="header-anchor" href="#warning-level" aria-hidden="true">#</a> <code>warning</code> level</h3><p><em>Node descriptor reports device is only compliant to revision</em>: Device identified as having an older Zigbee revision. These can be the source of problems, especially if <code>pre-21</code>.</p><p><em>[EzspConfigId] Failed to SET</em>: Usually when the coordinator has lower memory than others. In-firmware value will be used instead.</p><p><em>An ID conflict was detected</em>: Two devices cannot have the same ID on the same network. The involved devices are kicked off the network then should rejoin (may need to re-pair them if not).</p><p><em>Network/Route error</em>: These are accompanied by a status that describes in more details the source of the error. A few of these over time is expected (or on Zigbee2MQTT start), too many, too often, is indicative of a problem in your network.</p><p><em>NOT READY - Signaling NCP</em>: <code>ember</code> driver is temporarily overloaded. The coordinator is made aware and processing is deferred for a short period.</p><h3 id="error-level" tabindex="-1"><a class="header-anchor" href="#error-level" aria-hidden="true">#</a> <code>error</code> level</h3><p>Mismatching EZSP version on start. <code>ember</code> currently requires a firmware with EZSP v13 (EmberZNet firmware 7.4.x).</p><p>Mismatching backup version when restoring on start. <code>ember</code> currently only supports EZSP v12 and above backups (can be identified by opening the <code>coordinator_backup.json</code> file).</p><p>Failed delivery of a message. The target device could not be reached. There can be several causes for this, the rest of the logs should help identify which.</p><p>Failed request. Message should be self-explanatory, and give a <code>status</code> indicating the reason of the failure.</p><p>NCP Fatal Error. The coordinator failed (the reason should be given in the message). Zigbee2MQTT will attempt to reset it and resume communication. If unsuccessful, Zigbee2MQTT will be stopped completely and the system&#39;s watchdog (if any) will attempt to restart it.</p>',17),je={},He=(0,a(983744).Z)(je,[["render",function(e,r){const a=(0,t.up)("RouterLink"),n=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)("div",null,[d,(0,t._)("p",null,[(0,t.Wm)(a,{to:"/guide/configuration/adapter-settings.html"},{default:(0,t.w5)((()=>[(0,t.Uk)("Other settings")])),_:1})]),(0,t._)("div",u,[p,(0,t._)("p",null,[(0,t.Uk)("If you are experiencing issues with your adapter and it has hardware flow control support (check list below), try to flash a "),(0,t._)("a",c,[(0,t.Uk)("firmware with hardware flow control disabled"),(0,t.Wm)(n)]),(0,t.Uk)(" and use the following setting instead:")]),h]),m,b,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Uk)("Web-based "),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Uk)("Multi-devices by "),(0,t._)("a",g,[(0,t.Uk)("@darkxst"),(0,t.Wm)(n)]),(0,t.Uk)(": "),(0,t._)("a",A,[(0,t.Uk)("Silabs Firmware Flasher"),(0,t.Wm)(n)])]),f,k])]),(0,t._)("li",null,[(0,t.Uk)("Command-line based: "),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Uk)("Multi-devices by Nabu Casa: "),(0,t._)("a",w,[(0,t.Uk)("Universal Silicon Labs Flasher"),(0,t.Wm)(n)]),(0,t.Uk)(" (also available via Home Assistant add-on)")])])]),(0,t._)("li",null,[(0,t.Uk)("Other: "),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Uk)("Silicon Labs "),(0,t._)("a",E,[(0,t.Uk)("Simplicity Studio"),(0,t.Wm)(n)]),(0,t.Uk)(' included "Flash Programmer" ('),(0,t._)("a",v,[(0,t.Uk)("instructions"),(0,t.Wm)(n)]),(0,t.Uk)(")")])])]),y]),U,_,(0,t._)("details",null,[R,B,(0,t._)("p",null,[(0,t._)("strong",null,[(0,t.Uk)('This section is about the "ZBDongle-E", for "ZBDongle-P" see '),(0,t.Wm)(a,{to:"/guide/adapters/zstack.html"},{default:(0,t.w5)((()=>[(0,t.Uk)("zStack")])),_:1}),(0,t.Uk)(".")])]),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",W,[(0,t.Uk)("Product Page"),(0,t.Wm)(n)])]),(0,t._)("li",null,[(0,t._)("a",I,[(0,t.Uk)("Coordinator firmware"),(0,t.Wm)(n)])]),(0,t._)("li",null,[(0,t._)("a",z,[(0,t.Uk)("Flashing"),(0,t.Wm)(n)])]),(0,t._)("li",null,[(0,t._)("a",P,[(0,t.Uk)("Buy"),(0,t.Wm)(n)])])]),S]),(0,t._)("details",null,[C,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",T,[(0,t.Uk)("Product page"),(0,t.Wm)(n)])]),(0,t._)("li",null,[(0,t._)("a",x,[(0,t.Uk)("Coordinator firmware"),(0,t.Wm)(n)])]),(0,t._)("li",null,[(0,t._)("a",Q,[(0,t.Uk)("Flashing"),(0,t.Wm)(n)])]),(0,t._)("li",null,[(0,t._)("a",M,[(0,t.Uk)("Buy"),(0,t.Wm)(n)])])]),L]),(0,t._)("details",null,[Z,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",D,[(0,t.Uk)("Product page"),(0,t.Wm)(n)])]),(0,t._)("li",null,[(0,t.Uk)("Buy: "),(0,t._)("a",N,[(0,t.Uk)("Official Store - Worldwide"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",O,[(0,t.Uk)("Aliexpress - Worldwide"),(0,t.Wm)(n)]),(0,t.Uk)("."),q,(0,t.Uk)(" Local fast delivery: "),(0,t._)("a",j,[(0,t.Uk)("Australia"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",H,[(0,t.Uk)("Austria, Belgium, Germany, Netherlands"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",J,[(0,t.Uk)("France"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",F,[(0,t.Uk)("Poland"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",G,[(0,t.Uk)("US Amazon"),(0,t.Wm)(n)])])]),V]),X,(0,t._)("details",null,[Y,K,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",$,[(0,t.Uk)("Product page"),(0,t.Wm)(n)])]),(0,t._)("li",null,[(0,t._)("a",ee,[(0,t.Uk)("Buy"),(0,t.Wm)(n)])])]),re]),ae,(0,t._)("details",null,[te,ne,le,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",se,[(0,t.Uk)("Recommended firmware"),(0,t.Wm)(n)]),(0,t.Uk)(", baud rate settings is 115200.")]),(0,t._)("li",null,[(0,t._)("a",ie,[(0,t.Uk)("Product page"),(0,t.Wm)(n)])]),(0,t._)("li",null,[(0,t.Uk)("Buy: "),(0,t._)("a",oe,[(0,t.Uk)("Official Store - Worldwide"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",de,[(0,t.Uk)("Aliexpress - Worldwide"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",ue,[(0,t.Uk)("Tindie - Worldwide"),(0,t.Wm)(n)]),(0,t.Uk)("."),pe,(0,t.Uk)(" Local fast delivery: "),(0,t._)("a",ce,[(0,t.Uk)("AU"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",he,[(0,t.Uk)("AT"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",me,[(0,t.Uk)("BE"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",be,[(0,t.Uk)("CH"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",ge,[(0,t.Uk)("EE"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",Ae,[(0,t.Uk)("FR"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",fe,[(0,t.Uk)("DE"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",ke,[(0,t.Uk)("LT"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",we,[(0,t.Uk)("LV"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",Ee,[(0,t.Uk)("PL"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",ve,[(0,t.Uk)("TH"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",ye,[(0,t.Uk)("US official"),(0,t.Wm)(n)]),(0,t.Uk)(", "),(0,t._)("a",Ue,[(0,t.Uk)("US Amazon"),(0,t.Wm)(n)]),(0,t.Uk)(".")])]),_e]),(0,t._)("details",null,[Re,Be,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",We,[(0,t.Uk)("Product page"),(0,t.Wm)(n)])]),Ie]),ze]),Pe,(0,t._)("details",null,[Se,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",Ce,[(0,t.Uk)("Product page"),(0,t.Wm)(n)])]),(0,t._)("li",null,[(0,t._)("a",Te,[(0,t.Uk)("Coordinator firmware"),(0,t.Wm)(n)])]),(0,t._)("li",null,[(0,t._)("a",xe,[(0,t.Uk)("Flashing"),(0,t.Wm)(n)])]),(0,t._)("li",null,[(0,t._)("a",Qe,[(0,t.Uk)("Buy"),(0,t.Wm)(n)])])]),Me]),Le,Ze,(0,t._)("details",null,[De,Ne,(0,t._)("p",null,[(0,t.Uk)("See "),(0,t._)("a",Oe,[(0,t.Uk)("Silicon Labs announcement"),(0,t.Wm)(n)]),(0,t.Uk)(".")])]),qe])}]])}}]);