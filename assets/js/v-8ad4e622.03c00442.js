"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[34925],{473331:(e,t,n)=>{n.r(t),n.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-8ad4e622","path":"/devices/ZLGP14_ZLGP15_ZLGP16.html","title":"Legrand ZLGP14/ZLGP15/ZLGP16 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Legrand ZLGP14/ZLGP15/ZLGP16 control via MQTT","description":"Integrate your Legrand ZLGP14/ZLGP15/ZLGP16 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-06-01T08:09:29.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Green Power","slug":"green-power","link":"#green-power","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Manfacturer documentations","slug":"manfacturer-documentations","link":"#manfacturer-documentations","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1717095267000},"filePathRelative":"devices/ZLGP14_ZLGP15_ZLGP16.md"}')},101875:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(166252);const r=(0,a._)("h1",{id:"legrand-zlgp14-zlgp15-zlgp16",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#legrand-zlgp14-zlgp15-zlgp16","aria-hidden":"true"},"#"),(0,a.Uk)(" Legrand ZLGP14/ZLGP15/ZLGP16")],-1),i=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),o=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"ZLGP14/ZLGP15/ZLGP16")],-1),l=(0,a._)("td",null,"Vendor",-1),d=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"Wireless and batteryless scenario switch (home arrival/departure, 1-4 switches, daytime day/night)")],-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"action, linkquality")],-1),c=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZLGP14-ZLGP15-ZLGP16.png",alt:"Legrand ZLGP14/ZLGP15/ZLGP16"})])],-1),u=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="green-power" tabindex="-1"><a class="header-anchor" href="#green-power" aria-hidden="true">#</a> Green Power</h3><p>This is a Zigbee Green Power device which allows it to be very energy efficient.<br> The device identification is the same for several models ZLGP14, ZLGP15 and ZLGP16 (so far). Only command IDs differ (from 16 to 23).<br> Current supported models are:</p><ul><li>ZLGP14 (home arrival/home departure)</li><li>ZLGP15 (1 to 4 numbered switches)</li><li>ZLGP16 (daytime day/daytime night)</li></ul><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To pair this device, hold the configuration button (on the back of the device) and press any of the buttons.<br> For further details, please refer to manufacturer documentation below.</p><h3 id="manfacturer-documentations" tabindex="-1"><a class="header-anchor" href="#manfacturer-documentations" aria-hidden="true">#</a> Manfacturer documentations</h3>',7),h={href:"https://www.admin.legrandoc.com/files/documents/S000113314EN-00.pdf",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.admin.legrandoc.com/files/documents/S000113314FR-00.pdf",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.admin.legrandoc.com/files/documents/S000113321EN-00.pdf",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.admin.legrandoc.com/files/documents/S000113321FR-00.pdf",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.admin.legrandoc.com/files/documents/S000113317EN-00.pdf",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.admin.legrandoc.com/files/documents/S000113317FR-00.pdf",target:"_blank",rel:"noopener noreferrer"},k=(0,a._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,a.Uk)(" OTA updates")],-1),w=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>home_arrival</code>, <code>home_departure</code>, <code>press_1</code>, <code>press_2</code>, <code>press_3</code>, <code>press_4</code>, <code>daytime_day</code>, <code>daytime_night</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),L={},b=(0,n(983744).Z)(L,[["render",function(e,t){const n=(0,a.up)("RouterLink"),L=(0,a.up)("ExternalLinkIcon");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),r,(0,a._)("table",null,[i,(0,a._)("tbody",null,[o,(0,a._)("tr",null,[l,(0,a._)("td",null,[(0,a.Wm)(n,{to:"/supported-devices/#v=Legrand"},{default:(0,a.w5)((()=>[(0,a.Uk)("Legrand")])),_:1})])]),d,s,c])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("ZLGP14 "),(0,a._)("a",h,[(0,a.Uk)("EN"),(0,a.Wm)(L)]),(0,a.Uk)(),(0,a._)("a",p,[(0,a.Uk)("FR"),(0,a.Wm)(L)])]),(0,a._)("li",null,[(0,a.Uk)("ZLGP15 "),(0,a._)("a",m,[(0,a.Uk)("EN"),(0,a.Wm)(L)]),(0,a.Uk)(),(0,a._)("a",g,[(0,a.Uk)("FR"),(0,a.Wm)(L)])]),(0,a._)("li",null,[(0,a.Uk)("ZLGP16 "),(0,a._)("a",f,[(0,a.Uk)("EN"),(0,a.Wm)(L)]),(0,a.Uk)(),(0,a._)("a",_,[(0,a.Uk)("FR"),(0,a.Wm)(L)])])]),(0,a.kq)(" Notes END: Do not edit below this line "),k,(0,a._)("p",null,[(0,a.Uk)("This device supports OTA updates, for more information see "),(0,a.Wm)(n,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("OTA updates")])),_:1}),(0,a.Uk)(".")]),w])}]])}}]);