import { IResourceComponentsProps } from '@pankod/refine-core';
import { Edit, Form, Input, Select, Switch, useForm, useSelect } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { ICourseSession, IExportCourse, IExporter } from 'interfaces';

export const CourseSessionEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ICourseSession>();
  const { selectProps: exporterSelectProps } = useSelect<IExporter>({
    resource: 'exporter',
    fetchSize: 100,
  });
  const { selectProps: exportCourseSelectProps } = useSelect<IExportCourse>({
    resource: 'export-course',
    fetchSize: 100,
  });
  return (
    <Edit saveButtonProps={saveButtonProps}>
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
          label="Exporter ID"
          name="id"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...exporterSelectProps} />
        </Form.Item>
        <Form.Item
          label="Course"
          name="courseId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...exportCourseSelectProps} />
        </Form.Item>
        <Form.Item
          label="Is Finished"
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
    </Edit>
  );
};
