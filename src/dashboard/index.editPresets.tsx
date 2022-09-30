import { Button, Input } from "antd";
import { Presets } from "common/types/presets";
import { useReplicantValue } from "common/useReplicant";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { DataEdit } from "./dataEdit";

function EditPresets() {
  const [presets, setPresets] = useReplicantValue<Presets>(
    "presets",
    undefined,
    {
      defaultValue: [],
    }
  );
  const [newPresetName, setNewPresetName] = useState("");
  return (
    <div>
      {presets.map((preset, index) => (
        <div key={preset.presetName + index}>
          <b>{preset.presetName}</b>
          <DataEdit
            data={preset}
            setData={
              ((val: Presets[0]) => {
                const newPresets = [...presets];
                newPresets[index] = val;
                setPresets(newPresets);
              }) as any
            }
          />
          <Button
            type="primary"
            color="red"
            onClick={() => {
              const newPresets = [...presets];
              newPresets.splice(index, 1);
              setPresets(newPresets);
            }}
          >
            Delete
          </Button>
        </div>
      ))}
      <div>
        <Input
          value={newPresetName}
          onChange={(e) => setNewPresetName(e.target.value)}
        />
        <Button
          type="primary"
          onClick={() => {
            setPresets([
              ...presets,
              {
                presetName: newPresetName,
                name: "",
                name2: "",
                position: "",
                position2: "",
                society: "",
                societySocials: "",
              },
            ]);
          }}
        >
          Add New
        </Button>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<EditPresets />);
