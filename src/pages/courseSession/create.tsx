import { IResourceComponentsProps } from '@pankod/refine-core';
import { Create, Form, Input, useForm, useSelect, Select, Switch } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { ICourseSession, IExportCourse, IExporter } from 'interfaces';

export const CourseSessionCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ICourseSession>();
  const { selectProps: exporterSelectProps } = useSelect<IExporter>({
    resource: 'exporter',
    fetchSize: 100,
  });
  const { selectProps: courseSelectProps } = useSelect<IExportCourse>({
    resource: 'export-course',
    fetchSize: 100,
  });
  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Current Chapter Number"
          name="currentChapterNumber"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Certificate Link"
          name="certificateLink"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Exporter"
          name="exporterId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...exporterSelectProps} />
        </Form.Item>
        <Form.Item
          label="ExportCourse"
          name="courseId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...courseSelectProps} />
        </Form.Item>
        <Form.Item
          label="is Finished"
          name="isFinished"
          valuePropName="checked"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Switch />
        </Form.Item>
      </Form>
    </Create>
  );
};
