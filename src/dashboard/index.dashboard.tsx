import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./dashboard.css";
import { Form, Input, Row, Col, Button } from "antd";
import { useReplicantValue } from "common/useReplicant";
import { Data } from "common/types/data";
import { Control } from "common/types/control";

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
  return (
    <>
      <Row>
        <Col span={12}>
          <Form>
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
                onChange={(e) =>
                  setData({ ...data, position2: e.target.value })
                }
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
                onChange={(e) =>
                  setData({ ...data, societySocials: e.target.value })
                }
              />
            </Form.Item>
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
      </Row>
    </>
  );
}

ReactDOM.render(<Dashboard />, document.getElementById("root"));
