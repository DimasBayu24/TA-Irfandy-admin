import { IResourceComponentsProps } from '@pankod/refine-core';
import { Create, Form, Input, useForm, useSelect, Select } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { ICourseChapter, IExportCourse } from 'interfaces';

export const CourseChapterCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ICourseChapter>();
  const { selectProps: exportCourseSelectProps } = useSelect<IExportCourse>({
    resource: 'export-course',
    fetchSize: 100,
  });
  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Chapter Number"
          name="chapterNumber"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
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
          <Select {...exportCourseSelectProps} />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Video Url"
          name="videoUrl"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Explanation"
          name="explanation"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};
