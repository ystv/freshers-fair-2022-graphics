import React from "react";
import { Form, Input } from "antd";
import { Data } from "common/types/data";

interface DataEditProps {
  data: Data;
  setData: (v: Data) => unknown;
}

export function DataEdit({ data, setData }: DataEditProps) {
  return (
    <>
      <Form.Item label="Name 1" required>
        <Input
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </Form.Item>
      <Form.Item label="Position 1">
        <Input
          value={data.position}
          onChange={(e) => setData({ ...data, position: e.target.value })}
        />
      </Form.Item>
      <Form.Item label="Name 2">
        <Input
          value={data.name2}
          onChange={(e) => setData({ ...data, name2: e.target.value })}
        />
      </Form.Item>
      <Form.Item label="Position 2">
        <Input
          value={data.position2}
          onChange={(e) => setData({ ...data, position2: e.target.value })}
        />
      </Form.Item>
      <Form.Item label="Society / Role">
        <Input
          value={data.society}
          onChange={(e) => setData({ ...data, society: e.target.value })}
        />
      </Form.Item>
      <Form.Item label="Social Media Handle">
        <Input
          value={data.societySocials}
          onChange={(e) => setData({ ...data, societySocials: e.target.value })}
        />
      </Form.Item>
    </>
  );
}
