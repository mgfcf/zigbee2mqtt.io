"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[14659],{742341:(e,i,n)=>{n.r(i),n.d(i,{data:()=>t});const t=JSON.parse('{"key":"v-6435c2d1","path":"/devices/CCT595011.html","title":"Schneider Electric CCT595011 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Schneider Electric CCT595011 control via MQTT","description":"Integrate your Schneider Electric CCT595011 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-03-31T18:50:25.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Illuminance measurement","slug":"illuminance-measurement","link":"#illuminance-measurement","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Illuminance (lux) (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1717095267000},"filePathRelative":"devices/CCT595011.md"}')},974647:(e,i,n)=>{n.r(i),n.d(i,{default:()=>f});var t=n(166252);const l=(0,t._)("h1",{id:"schneider-electric-cct595011",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#schneider-electric-cct595011","aria-hidden":"true"},"#"),(0,t.Uk)(" Schneider Electric CCT595011")],-1),a=(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th"),(0,t._)("th")])],-1),c=(0,t._)("tr",null,[(0,t._)("td",null,"Model"),(0,t._)("td",null,"CCT595011")],-1),r=(0,t._)("td",null,"Vendor",-1),o=(0,t._)("tr",null,[(0,t._)("td",null,"Description"),(0,t._)("td",null,"Wiser motion sensor")],-1),u=(0,t._)("tr",null,[(0,t._)("td",null,"Exposes"),(0,t._)("td",null,"battery, illuminance, illuminance_lux, occupancy, linkquality")],-1),d=(0,t._)("tr",null,[(0,t._)("td",null,"Picture"),(0,t._)("td",null,[(0,t._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/CCT595011.png",alt:"Schneider Electric CCT595011"})])],-1),s=(0,t._)("h2",{id:"notes",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,t.Uk)(" Notes")],-1),h=(0,t._)("h3",{id:"illuminance-measurement",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#illuminance-measurement","aria-hidden":"true"},"#"),(0,t.Uk)(" Illuminance measurement")],-1),m=(0,t._)("p",null,"The motion/occupancy detection works ok and illuminance measurement has worked in tests sporadically but automatic illuminance reporting or any kind of level triggering has not been successful and is not configured automatically. These should be supported by the device and will hopefully be added in the future.",-1),p=(0,t._)("h2",{id:"options",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,t.Uk)(" Options")],-1),b=(0,t.uE)('<ul><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance (lux) (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),y={},f=(0,n(983744).Z)(y,[["render",function(e,i){const n=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.kq)(" !!!! "),(0,t.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,t.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,t.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,t.kq)(" !!!! "),l,(0,t._)("table",null,[a,(0,t._)("tbody",null,[c,(0,t._)("tr",null,[r,(0,t._)("td",null,[(0,t.Wm)(n,{to:"/supported-devices/#v=Schneider%20Electric"},{default:(0,t.w5)((()=>[(0,t.Uk)("Schneider Electric")])),_:1})])]),o,u,d])]),(0,t.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),s,h,m,(0,t.kq)(" Notes END: Do not edit below this line "),p,(0,t._)("p",null,[(0,t._)("em",null,[(0,t.Wm)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.w5)((()=>[(0,t.Uk)("How to use device type specific configuration")])),_:1})])]),b])}]])}}]);