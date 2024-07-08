import { basekit, Component, ParamType } from '@lark-opdev/block-basekit-server-api';
import { callChatGPT } from './chatGPTAPI';

basekit.addAction({
  useTenantAccessToken: true,
  permission: { type: 2 },
  formItems: [
    {
      itemId: "text",
      label: 'Văn bản',
      component: Component.Input,
      componentProps: {
        placeholder: 'Vui lòng nhập văn bản',
      }
    },
    {
      itemId: 'transformType',
      label: 'Chọn các loại chuyển đổi',
      required: true,
      component: Component.SingleSelect,
      componentProps: {
        options: [
          {
            label: 'Tóm tắt văn bản',
            value: 'summarize',
          },
          {
            label: 'Trả lời câu hỏi',
            value: 'answerQuestion',
          },
          {
            label: 'Chuyển đổi thành tiếng anh',
            value: 'convertToEnglish'
          },
          {
            label: 'Chuyển đổi thành tiếng việt',
            value: 'convertToVietnamese'
          }
        ]
      }
    }
  ],
  execute: async function(args, context) {
    const { text, transformType, tenantAccessToken } = args;
    const apiKey = "657449b6089d44cebeaa35dff4b920d4";
    let prompt = "";
    if (transformType === 'summarize') {
      prompt = `Tóm tắt: ${text}`;
    }
    else if (transformType === 'answerQuestion') {
      prompt = `Trả lời câu hỏi: ${text}`;
    }
    else if (transformType === 'convertToEnglish') {
      prompt = `Chuyển đổi thành tiếng anh: ${text}`;
    }
    else if (transformType === 'convertToVietnamese') {
      prompt = `Chuyển đổi thành tiếng việt: ${text}`;
    }
    const response = await callChatGPT(prompt, apiKey);
      return {
        text: response
      };
  },
  resultType: {
    type: ParamType.Object,
    properties: {
        text: {
          type: ParamType.String,
          label: 'result',
        },
    }
  }
});

export default basekit;
