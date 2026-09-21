import './network-art.css';

type NetworkArtProps = {
  locale: 'ar' | 'en';
};

/** Decorative product illustration. All publisher details are labelled as a preview. */
export function NetworkArt({ locale }: NetworkArtProps) {
  const arabic = locale === 'ar';

  return (
    <div className="network-art" aria-hidden="true" dir="ltr">
      <svg className="network-art__canvas" viewBox="0 0 620 620" fill="none">
        <defs>
          <radialGradient id="network-halo">
            <stop stopColor="#B6ECCC" stopOpacity=".6" />
            <stop offset=".62" stopColor="#DDF1E3" stopOpacity=".44" />
            <stop offset="1" stopColor="#EFF6EC" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="network-tile" x1="210" y1="214" x2="426" y2="418" gradientUnits="userSpaceOnUse">
            <stop stopColor="#206A50" />
            <stop offset=".4" stopColor="#123F32" />
            <stop offset="1" stopColor="#082B24" />
          </linearGradient>
          <linearGradient id="network-edge" x1="245" y1="200" x2="380" y2="445" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2B8160" />
            <stop offset=".5" stopColor="#17543E" />
            <stop offset="1" stopColor="#071E19" />
          </linearGradient>
          <linearGradient id="network-link" x1="264" y1="252" x2="351" y2="357" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EEFFC9" />
            <stop offset=".38" stopColor="#C3F79B" />
            <stop offset="1" stopColor="#65C385" />
          </linearGradient>
          <linearGradient id="network-orbit" x1="77" y1="430" x2="547" y2="149" gradientUnits="userSpaceOnUse">
            <stop stopColor="#659F7B" stopOpacity=".1" />
            <stop offset=".5" stopColor="#659F7B" stopOpacity=".58" />
            <stop offset="1" stopColor="#659F7B" stopOpacity=".14" />
          </linearGradient>
          <filter id="network-shadow" x="135" y="155" width="380" height="365" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="15" />
          </filter>
          <filter id="network-link-shadow" x="210" y="211" width="207" height="200" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <pattern id="network-dot-grid" x="2" y="2" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#265C3E" opacity=".1" />
          </pattern>
          <radialGradient id="network-grid-fade">
            <stop offset=".35" stopColor="white" />
            <stop offset="1" stopColor="black" />
          </radialGradient>
          <mask id="network-grid-mask">
            <rect width="620" height="620" fill="url(#network-grid-fade)" />
          </mask>
        </defs>

        <circle cx="311" cy="303" r="302" fill="url(#network-halo)" />
        <rect x="24" y="20" width="572" height="560" fill="url(#network-dot-grid)" mask="url(#network-grid-mask)" />

        <g className="network-art__orbits">
          <ellipse cx="312" cy="310" rx="255" ry="176" transform="rotate(-32 312 310)" stroke="url(#network-orbit)" />
          <ellipse cx="312" cy="310" rx="208" ry="248" transform="rotate(-32 312 310)" stroke="#78A88A" strokeOpacity=".17" />
          <ellipse cx="312" cy="310" rx="236" ry="126" transform="rotate(27 312 310)" stroke="#608D70" strokeOpacity=".19" />
          <ellipse cx="312" cy="310" rx="171" ry="211" transform="rotate(35 312 310)" stroke="#629673" strokeOpacity=".16" strokeDasharray="2 7" />
        </g>

        <g stroke="#578970" strokeWidth="1.1" strokeDasharray="3 6" opacity=".58">
          <path d="M169 195C213 172 262 208 286 262" />
          <path d="M398 286C474 262 492 229 471 180" />
          <path d="M286 380C254 424 217 436 175 425" />
          <path d="M376 377C412 405 447 419 493 402" />
        </g>

        <g className="network-art__tile">
          <rect x="230" y="244" width="185" height="192" rx="43" transform="rotate(-14 322.5 340)" fill="#184831" fillOpacity=".23" filter="url(#network-shadow)" />
          <g transform="rotate(-14 310 310)">
            <rect x="222" y="226" width="188" height="192" rx="45" fill="url(#network-edge)" />
            <rect x="217" y="214" width="188" height="192" rx="45" fill="url(#network-tile)" />
            <rect x="217.75" y="214.75" width="186.5" height="190.5" rx="44.25" stroke="#B6EDCE" strokeOpacity=".28" strokeWidth="1.5" />
            <path d="M245 228H358C377 228 392 243 392 262" stroke="#A1E8B9" strokeOpacity=".1" strokeWidth="2" strokeLinecap="round" />
            <g transform="translate(0 6)" opacity=".65" filter="url(#network-link-shadow)">
              <path d="M305 329L280 304C269 293 269 275 280 264C291 253 309 253 320 264L336 280M317 287L342 312C353 323 353 341 342 352C331 363 313 363 302 352L286 336" stroke="#020F0C" strokeWidth="21" strokeLinecap="round" />
            </g>
            <path d="M305 327L280 302C269 291 269 273 280 262C291 251 309 251 320 262L336 278" stroke="#3E9766" strokeWidth="20" strokeLinecap="round" />
            <path d="M317 285L342 310C353 321 353 339 342 350C331 361 313 361 302 350L286 334" stroke="#3E9766" strokeWidth="20" strokeLinecap="round" />
            <g transform="translate(0 -4)">
              <path d="M305 327L280 302C269 291 269 273 280 262C291 251 309 251 320 262L336 278" stroke="url(#network-link)" strokeWidth="18" strokeLinecap="round" />
              <path d="M317 285L342 310C353 321 353 339 342 350C331 361 313 361 302 350L286 334" stroke="url(#network-link)" strokeWidth="18" strokeLinecap="round" />
              <path d="M280 267C290 256 306 256 317 267L330 280M343 317C351 328 348 342 338 348" stroke="#F2FFDC" strokeOpacity=".55" strokeWidth="2" strokeLinecap="round" />
            </g>
            <circle cx="244" cy="375" r="2.5" fill="#95DFA7" fillOpacity=".8" />
            <path d="M253 375H277" stroke="#A9DABC" strokeOpacity=".28" strokeWidth="2" strokeLinecap="round" />
          </g>
        </g>

        <g className="network-art__node network-art__node--one">
          <circle cx="121" cy="285" r="20" fill="#FCFDF9" stroke="#D1E3D4" />
          <path d="M114 285H128M121 278V292" stroke="#398457" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g className="network-art__node network-art__node--two">
          <circle cx="498" cy="370" r="26" fill="#C3E9B1" />
          <circle cx="498" cy="370" r="18" stroke="#438352" strokeOpacity=".24" />
          <path d="M490 370L495 375L506 364" stroke="#245E3C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g>
          <circle cx="345" cy="77" r="5" fill="#376A49" />
          <circle cx="345" cy="77" r="11" stroke="#77A887" strokeOpacity=".19" />
          <circle cx="91" cy="371" r="4" fill="#ADCDA3" />
          <circle cx="420" cy="497" r="5" fill="#467A55" />
          <circle cx="235" cy="505" r="3" fill="#7DA37D" />
          <circle cx="521" cy="255" r="3" fill="#7DA37D" />
          <path d="M424 119V131M418 125H430M160 489V499M155 494H165" stroke="#89A88A" strokeWidth="1.3" strokeLinecap="round" />
        </g>
      </svg>

      <div className="network-art__card network-art__card--publisher" dir={arabic ? 'rtl' : 'ltr'}>
        <div className="network-art__card-top">
          <span className="network-art__publisher-icon">
            <svg viewBox="0 0 24 24" fill="none"><path d="M7 7H16M7 12H13M7 17H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M18 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V9L18 3Z" stroke="currentColor" strokeWidth="1.5" /></svg>
          </span>
          <span className="network-art__publisher-copy">
            <strong>{arabic ? 'المحتوى يفتح آفاقاً' : 'Content opens doors'}</strong>
            <small>{arabic ? 'ناشر مناسب. جمهور مهتم.' : 'The right publisher. Your audience.'}</small>
          </span>
          <span className="network-art__status-dot" />
        </div>
        <div className="network-art__card-bottom">
          <span>{arabic ? 'تقنية وأعمال' : 'Tech & business'}</span>
          <span>{arabic ? 'معاينة' : 'Preview'}</span>
        </div>
      </div>

      <div className="network-art__card network-art__card--insights" dir={arabic ? 'rtl' : 'ltr'}>
        <div className="network-art__insight-head">
          <span className="network-art__tiny-icon"><svg viewBox="0 0 16 16" fill="none"><path d="M2.5 11L6 7.5L9 10L13.5 4.5M10 4.5H13.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
          <strong>{arabic ? 'روابط تصنع الفرق' : 'Meaningful connections'}</strong>
        </div>
        <div className="network-art__chart">
          {[27, 43, 35, 52, 47, 68, 60, 78, 87, 100].map((height, index) => (
            <span key={index} style={{ height: `${height}%`, opacity: 0.32 + index * 0.068 }} />
          ))}
        </div>
        <div className="network-art__chart-caption"><span>{arabic ? 'رحلة نحو جمهورك' : 'A path to your audience'}</span><span>{arabic ? 'تصوّر توضيحي' : 'Illustration'}</span></div>
      </div>

      <div className="network-art__pill" dir={arabic ? 'rtl' : 'ltr'}>
        <span className="network-art__pill-dot" />
        {arabic ? 'الفكرة الصحيحة، في المكان الصحيح.' : 'Your story. The right place.'}
      </div>
    </div>
  );
}
