import { DownCircleOutlined, UpCircleOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import React from 'react';

const { Paragraph } = Typography;

const longText = '这是一段很长的文本，用来演示Typography.Paragraph的ellipsis功能。当文本内容超过指定的行数时，会自动显示省略号，并且可以通过展开/收起按钮来查看完整内容。这个功能在处理长文本时非常有用，可以让页面看起来更整洁。';

export function Hello() {
  return <div style={{ width: '300px', padding: '20px' }}>
    <h1>Typography.Paragraph Ellipsis Demo</h1>
    <div style={{ marginBottom: '20px' }}>
      <h3>单行省略：</h3>
      <Paragraph ellipsis>
        {longText}
      </Paragraph>
    </div>

    <div style={{ marginBottom: '20px' }}>
      <h3>多行省略（3行）：</h3>
      <Paragraph ellipsis={{ rows: 3 }}>
        {longText}
      </Paragraph>
    </div>

    <div>
      <h3>可展开/收起的多行省略：</h3>
      <Paragraph ellipsis={{ rows: 2, expandable: 'collapsible', symbol: (expanded) => expanded ? <UpCircleOutlined /> : <DownCircleOutlined /> }}>
        {longText}
      </Paragraph>
    </div>
  </div>;
}
