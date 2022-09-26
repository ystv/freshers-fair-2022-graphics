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
          bottom: 165rem;
          left: 50%;
          transform: translate(-50%, 0);
          margin: 0 auto;
          display: grid;
          grid-template-rows: auto auto;
          grid-template-columns: 1fr 1fr;
          gap: 8rem;
          padding: 4rem;
        `}
      >
        <motion.div
          css={css`
            height: 100%;
            grid-row: 1;
            text-align: ${data.name2 ? "right" : "center"};
            padding-right: 16rem;
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
              padding-left: 16rem;
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
          <motion.div
            css={css`
              grid-row: 2;
              grid-column: 1 / 3;
              text-align: center;
              padding-top: 8rem;
            `}
          >
            <motion.span
              css={css`
                font-size: 24pt;
                font-weight: 700;
              `}
            >
              {data.society}
            </motion.span>
            {data.societySocials && (
              <>
                <motion.span
                  css={css`
                    font-size: 24pt;
                    padding: 0 6rem;
                  `}
                >
                  &middot;
                </motion.span>
                <motion.span
                  css={css`
                    font-size: 24pt;
                    font-weight: 400;
                    font-style: italic;
                  `}
                >
                  {data.societySocials}
                </motion.span>
              </>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<Graphics />);
