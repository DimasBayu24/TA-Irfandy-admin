import { IResourceComponentsProps } from '@pankod/refine-core';
import { Edit, Form, Input, Select, useForm, useSelect } from '@pankod/refine-antd';

import 'react-mde/lib/styles/css/react-mde-all.css';

import { IExportCourse, ICourseChapter } from 'interfaces';

export const CourseChapterEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ICourseChapter>();
  const { selectProps: categorySelectProps } = useSelect<IExportCourse>({
    resource: 'export-course',
    fetchSize: 100,
  });
  return (
    <Edit saveButtonProps={saveButtonProps}>
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
          label="Export Course"
          name="courseId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
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
    </Edit>
  );
};
