import { createRoot } from "react-dom/client";
import React from "react";
import { useOnlyReplicantValue } from "common/useReplicant";
import { Name } from "./Name";
import { motion } from "framer-motion";
import { css } from "@emotion/react";
import { Data } from "common/types/data";
import { Control } from "common/types/control";
import "./graphics.css";

function Graphics() {
  const data = useOnlyReplicantValue<Data>("data", undefined);
  const control = useOnlyReplicantValue<Control>("control", undefined);
  if (!data || !control) {
    return null;
  }
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        // position: relative;
        width: 100%;
        height: 100%;
      `}
    >
      <motion.div
        css={css`
          background-color: #333333;
          color: #fafafa;
          position: absolute;
          bottom: 100rem;
          left: 50%;
          transform: translate(-50%, 0);
          margin: 0 auto;
          display: grid;
          grid-template-rows: auto auto;
          grid-template-columns: 1fr auto 1fr;
          gap: 8rem;
          padding: 4rem 32rem;
          white-space: nowrap;
          text-overflow: clip;
        `}
        initial="hidden"
        animate={control.open ? "visible" : "hidden"}
        exit="hidden"
        variants={{
          visible: {
            // width: "auto",
            opacity: 1,
          },
          hidden: {
            // width: 0,
            opacity: 0,
          },
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <motion.svg
          width="51px"
          viewBox="0 0 51 178"
          preserveAspectRatio="none"
          css={css`
            position: absolute;
            left: -31rem;
            height: 100%;
            z-index: 200;
          `}
        >
          <path
            fill-rule="evenodd"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            fill="rgb(51, 51, 51)"
            d="M14.193,0.000 L45.807,0 L45.807,178.0 L40.449,178.0 L14.193,0.000 Z"
          />
          <motion.path
            fill-rule="evenodd"
            fill="rgb(34, 126, 228)"
            d="M14.231,1.218 L7.962,2.806 C2.565,4.174 -0.914,10.695 0.192,17.372 L24.995,167.169 C26.100,173.846 31.372,178.149 36.769,176.782 L43.038,175.194 C48.435,173.826 51.914,167.305 50.808,160.628 L26.005,10.831 C24.900,4.154 19.628,-0.149 14.231,1.218 Z"
          />
        </motion.svg>
        <motion.svg
          width="51px"
          viewBox="0 0 51 178"
          preserveAspectRatio="none"
          css={css`
            position: absolute;
            right: -26rem;
            height: 100%;
            z-index: 200;
          `}
        >
          <path
            fill-rule="evenodd"
            stroke="rgb(0, 0, 0)"
            stroke-width="0px"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            fill="rgb(51, 51, 51)"
            d="M36.127,0 L13.817,0 L13.813,176.873 L14.109,176.873 L36.127,0 Z"
          />
          <motion.path
            fill-rule="evenodd"
            fill="rgb(34, 126, 228)"
            d="M36.793,1.224 L43.009,2.799 C48.419,4.170 51.907,10.709 50.799,17.403 L26.010,167.138 C24.902,173.832 19.618,178.147 14.207,176.776 L7.991,175.201 C2.581,173.830 -0.907,167.291 0.201,160.597 L24.990,10.862 C26.098,4.168 31.382,-0.147 36.793,1.224 Z"
          />
        </motion.svg>
        <motion.div
          css={css`
            height: 100%;
            grid-row: 1;
            grid-column: ${data.name2 ? "1" : "1 / 4"};
            text-align: ${data.name2 ? "right" : "center"};
            padding-right: 8rem;
          `}
        >
          <motion.span
            css={css`
              display: block;
              font-size: 36pt;
              font-weight: 500;
            `}
          >
            {data.name}
          </motion.span>
          <motion.span
            css={css`
              display: block;
              font-size: 24pt;
              font-weight: 300;
              font-style: italic;
            `}
          >
            {data.position}
          </motion.span>
        </motion.div>
        {data.name2 && (
          <motion.div
            css={css`
              height: 100%;
              grid-row: 1;
              text-align: left;
              padding-left: 8rem;
              grid-column: 3;
            `}
          >
            <motion.span
              css={css`
                display: block;
                font-size: 36pt;
                font-weight: 500;
              `}
            >
              {data.name2}
            </motion.span>
            <motion.span
              css={css`
                display: block;
                font-size: 24pt;
                font-weight: 300;
                font-style: italic;
              `}
            >
              {data.position2}
            </motion.span>
          </motion.div>
        )}
        {data.society && (
          <>
            <motion.span
              css={css`
                font-size: 24pt;
                font-weight: 700;
                grid-row: 2;
                grid-column: ${data.societySocials ? "1" : "1 / 4"};
                text-align: ${data.societySocials ? "right" : "center"};
              `}
            >
              {data.society}
            </motion.span>
            {data.societySocials && (
              <>
                <motion.span
                  css={css`
                    font-size: 24pt;
                    font-weight: 400;
                    font-style: italic;
                    grid-row: 2;
                    grid-column: 2;
                  `}
                >
                  &middot;
                </motion.span>
                <motion.span
                  css={css`
                    font-size: 24pt;
                    font-weight: 400;
                    font-style: italic;
                    grid-row: 2;
                    grid-column: 3;
                    text-align: left;
                  `}
                >
                  {data.societySocials}
                </motion.span>
              </>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<Graphics />);
