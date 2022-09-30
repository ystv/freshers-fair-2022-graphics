import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "antd/dist/antd.css";
import "./dashboard.css";
import { Form, Input, Row, Col, Button, Select } from "antd";
import { useOnlyReplicantValue, useReplicantValue } from "common/useReplicant";
import { Data } from "common/types/data";
import { Control } from "common/types/control";
import { DataEdit } from "./dataEdit";
import { Presets } from "common/types/presets";
import { css } from "@emotion/react";

function Dashboard() {
  const [data, setData] = useReplicantValue<Data>("data", undefined, {
    defaultValue: {
      name: "",
      name2: "",
      position: "",
      position2: "",
      society: "",
      societySocials: "",
    },
  });
  const [control, setControl] = useReplicantValue<Control>(
    "control",
    undefined,
    {
      defaultValue: {
        open: false,
      },
    }
  );
  const [presets, setPresets] = useReplicantValue<Presets>(
    "presets",
    undefined,
    {
      defaultValue: [],
    }
  );
  const [activePreset, setActivePreset] = useState<string>("");
  function saveAsPreset() {
    const name = prompt("Enter preset name");
    if (!name) {
      return;
    }
    setPresets([
      ...presets,
      {
        presetName: name,
        ...data,
      },
    ]);
  }
  return (
    <>
      <Row>
        <Col span={12}>
          <Form>
            <DataEdit data={data} setData={setData} />
          </Form>
        </Col>
        <Col span={12}>
          {control.open ? (
            <Button
              type="dashed"
              onClick={() => setControl({ ...control, open: false })}
            >
              Close
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={() => setControl({ ...control, open: true })}
            >
              Open
            </Button>
          )}
        </Col>
        <Col>
          <b>Presets</b>
          <Select
            value={activePreset}
            onChange={(val) => {
              let preset = presets.find((preset) => preset.presetName === val);
              if (!preset) {
                return;
              }
              setActivePreset(val);

              const data = Object.assign({}, preset) as Data;
              // @ts-expect-error converting preset to data
              delete data.presetName;
              setData(data);
            }}
            css={css`
              min-width: 12rem;
            `}
          >
            {presets.map((preset) => (
              <Select.Option value={preset.presetName}>
                {preset.presetName}
              </Select.Option>
            ))}
          </Select>
          <Button nodecg-dialog="edit-presets">Edit Presets</Button>
          <Button onClick={saveAsPreset}>Save As Preset</Button>
        </Col>
      </Row>
    </>
  );
}

createRoot(document.getElementById("root")!).render(<Dashboard />);
