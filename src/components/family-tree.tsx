export function FamilyTree() {
  return (
    <div className="w-full rounded-2xl border border-border/80 bg-white p-4 shadow-sm md:p-8 dark:bg-card">
      <div className="mb-6 flex flex-col justify-between gap-2 border-b border-border/60 pb-4 md:flex-row md:items-baseline">
        <div>
          <h3 className="font-display text-2xl text-foreground md:text-3xl">Family Pedigree</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Pedigree chart and genetic lineage overview.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-xs border border-slate-700 bg-[#254b6e]" />
            Male
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-full border border-amber-950 bg-[#dc592a]" />
            Female
          </span>
        </div>
      </div>

      {/* SVG Canvas Container */}
      <div className="w-full overflow-x-auto">
        <div className="min-w-[840px] max-w-[980px] mx-auto py-4">
          <svg
            viewBox="0 0 940 540"
            className="w-full h-auto select-none"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            <defs>
              {/* Square gradients */}
              <linearGradient id="sq-dark-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2e5479" />
                <stop offset="100%" stopColor="#18314e" />
              </linearGradient>

              <linearGradient id="sq-mid-blue" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3d7ea9" />
                <stop offset="100%" stopColor="#1e4e7c" />
              </linearGradient>

              <linearGradient id="sq-light-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d8eaf7" />
                <stop offset="60%" stopColor="#75a8d1" />
                <stop offset="100%" stopColor="#4583b8" />
              </linearGradient>

              {/* Circle gradients */}
              <linearGradient id="circ-terracotta" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e36334" />
                <stop offset="100%" stopColor="#b63c19" />
              </linearGradient>

              <linearGradient id="circ-dark-rust" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#bd3320" />
                <stop offset="100%" stopColor="#7e170c" />
              </linearGradient>

              <linearGradient id="circ-pale-peach" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#faece7" />
                <stop offset="100%" stopColor="#e8b1a2" />
              </linearGradient>

              <linearGradient id="circ-peach" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffede5" />
                <stop offset="50%" stopColor="#f3a992" />
                <stop offset="100%" stopColor="#d36345" />
              </linearGradient>
            </defs>

            {/* ========================================================
                CONNECTING LINES
               ======================================================== */}

            {/* Gen 1 Lineage (Blue Lines) */}
            {/* Gen 1 Marriage line */}
            <line x1="444" y1="80" x2="520" y2="80" stroke="#1c4872" strokeWidth="2.2" />

            {/* Gen 1 Descent line from marriage midpoint */}
            <line x1="482" y1="80" x2="482" y2="165" stroke="#1c4872" strokeWidth="2.2" />

            {/* Gen 2 Sibling horizontal distributor bar */}
            <line x1="216" y1="165" x2="744" y2="165" stroke="#1c4872" strokeWidth="2.2" />

            {/* Sibling drops to Gen 2 members */}
            <line x1="216" y1="165" x2="216" y2="238" stroke="#1c4872" strokeWidth="2.2" />
            <line x1="416" y1="165" x2="416" y2="238" stroke="#1c4872" strokeWidth="2.2" />
            <line x1="744" y1="165" x2="744" y2="238" stroke="#1c4872" strokeWidth="2.2" />

            {/* Gen 2 Marriages & Descent (Green Lines) */}

            {/* Left Couple (Gen 2: Male + Female) */}
            <line x1="112" y1="270" x2="186" y2="270" stroke="#24783c" strokeWidth="2.2" />
            <line x1="149" y1="270" x2="149" y2="365" stroke="#24783c" strokeWidth="2.2" />
            <line x1="79" y1="365" x2="216" y2="365" stroke="#24783c" strokeWidth="2.2" />
            <line x1="79" y1="365" x2="79" y2="435" stroke="#24783c" strokeWidth="2.2" />
            <line x1="216" y1="365" x2="216" y2="435" stroke="#24783c" strokeWidth="2.2" />

            {/* Center Couple (Gen 2: Male + Female) */}
            <line x1="448" y1="270" x2="524" y2="270" stroke="#24783c" strokeWidth="2.2" />

            {/* Right Couple (Gen 2: Female + Male) */}
            <line x1="774" y1="270" x2="848" y2="270" stroke="#24783c" strokeWidth="2.2" />
            <line x1="811" y1="270" x2="811" y2="365" stroke="#24783c" strokeWidth="2.2" />
            <line x1="744" y1="365" x2="880" y2="365" stroke="#24783c" strokeWidth="2.2" />
            <line x1="744" y1="365" x2="744" y2="435" stroke="#24783c" strokeWidth="2.2" />
            <line x1="880" y1="365" x2="880" y2="435" stroke="#24783c" strokeWidth="2.2" />

            {/* ========================================================
                GENERATION 1 NODES
               ======================================================== */}
            {/* Top Male */}
            <rect
              x="380"
              y="48"
              width="64"
              height="64"
              fill="url(#sq-dark-blue)"
              stroke="#14263b"
              strokeWidth="1.5"
            />

            {/* Top Female */}
            <circle
              cx="552"
              cy="80"
              r="32"
              fill="url(#circ-terracotta)"
              stroke="#381308"
              strokeWidth="1.5"
            />

            {/* ========================================================
                GENERATION 2 NODES
               ======================================================== */}

            {/* Left Couple */}
            {/* Male Spouse */}
            <rect
              x="48"
              y="238"
              width="64"
              height="64"
              fill="url(#sq-mid-blue)"
              stroke="#14263b"
              strokeWidth="1.5"
            />
            {/* Daughter 1 */}
            <circle
              cx="216"
              cy="270"
              r="32"
              fill="url(#circ-terracotta)"
              stroke="#381308"
              strokeWidth="1.5"
            />

            {/* Center Couple */}
            {/* Son 2 */}
            <rect
              x="384"
              y="238"
              width="64"
              height="64"
              fill="url(#sq-dark-blue)"
              stroke="#14263b"
              strokeWidth="1.5"
            />
            {/* Female Spouse */}
            <circle
              cx="556"
              cy="270"
              r="32"
              fill="url(#circ-pale-peach)"
              stroke="#401815"
              strokeWidth="1.5"
            />

            {/* Right Couple */}
            {/* Daughter 3 */}
            <circle
              cx="744"
              cy="270"
              r="32"
              fill="url(#circ-dark-rust)"
              stroke="#3b0a06"
              strokeWidth="1.5"
            />
            {/* Male Spouse */}
            <rect
              x="848"
              y="238"
              width="64"
              height="64"
              fill="url(#sq-mid-blue)"
              stroke="#14263b"
              strokeWidth="1.5"
            />

            {/* ========================================================
                GENETIC VARIANT ANNOTATIONS (Center Couple)
               ======================================================== */}
            {/* Blue Text Under Son 2 */}
            <g transform="translate(416, 335)" textAnchor="middle">
              <text
                x="0"
                y="0"
                fill="#19487c"
                fontSize="12.5"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontWeight="700"
                fontStyle="italic"
              >
                GBA:NM_001005741.2
              </text>
              <text
                x="0"
                y="17"
                fill="#1c4570"
                fontSize="11"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontWeight="500"
              >
                p.D448H/p.Asp448His; c.1342G&gt;C
              </text>
              <text
                x="0"
                y="33"
                fill="#1c4570"
                fontSize="11"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontWeight="500"
              >
                p.L483P/p.Leu483Pro; c.1448T&gt;C
              </text>
            </g>

            {/* Red Text Under Female Spouse */}
            <g transform="translate(585, 335)" textAnchor="middle">
              <text
                x="0"
                y="0"
                fill="#7e1a10"
                fontSize="12.5"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontWeight="700"
                fontStyle="italic"
              >
                CFTR:NM_000492.3
              </text>
              <text
                x="0"
                y="17"
                fill="#7e1a10"
                fontSize="11"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontWeight="500"
              >
                p.R1070Q/p.Arg1070Gln; c.3209G&gt;A
              </text>
            </g>

            {/* ========================================================
                GENERATION 3 NODES
               ======================================================== */}

            {/* Left Offspring */}
            {/* Grandson */}
            <rect
              x="47"
              y="435"
              width="64"
              height="64"
              fill="url(#sq-light-blue)"
              stroke="#2c4257"
              strokeWidth="1.5"
            />
            {/* Granddaughter */}
            <circle
              cx="216"
              cy="467"
              r="32"
              fill="url(#circ-peach)"
              stroke="#401815"
              strokeWidth="1.5"
            />

            {/* Right Offspring */}
            {/* Granddaughter */}
            <circle
              cx="744"
              cy="467"
              r="32"
              fill="url(#circ-peach)"
              stroke="#401815"
              strokeWidth="1.5"
            />
            {/* Grandson (with diagonal slash) */}
            <rect
              x="848"
              y="435"
              width="64"
              height="64"
              fill="url(#sq-mid-blue)"
              stroke="#14263b"
              strokeWidth="1.5"
            />
            {/* Diagonal slash line across bottom-right male square */}
            <line
              x1="835"
              y1="510"
              x2="925"
              y2="424"
              stroke="#0f172a"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
