"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_basekit_server_api_1 = require("@lark-opdev/block-basekit-server-api");
const chatGPTAPI_1 = require("./chatGPTAPI");
block_basekit_server_api_1.basekit.addAction({
    useTenantAccessToken: true,
    permission: { type: 2 },
    formItems: [
        {
            itemId: "text",
            label: 'Văn bản',
            component: block_basekit_server_api_1.Component.Input,
            componentProps: {
                placeholder: 'Vui lòng nhập văn bản',
            }
        },
        {
            itemId: 'transformType',
            label: 'Chọn các loại chuyển đổi',
            required: true,
            component: block_basekit_server_api_1.Component.SingleSelect,
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
    execute: async function (args, context) {
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
        const response = await (0, chatGPTAPI_1.callChatGPT)(prompt, apiKey);
        return {
            text: response
        };
    },
    resultType: {
        type: block_basekit_server_api_1.ParamType.Object,
        properties: {
            text: {
                type: block_basekit_server_api_1.ParamType.String,
                label: 'result',
            },
        }
    }
});
exports.default = block_basekit_server_api_1.basekit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcmVnaXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRkFBcUY7QUFDckYsNkNBQTJDO0FBRTNDLGtDQUFPLENBQUMsU0FBUyxDQUFDO0lBQ2hCLG9CQUFvQixFQUFFLElBQUk7SUFDMUIsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRTtJQUN2QixTQUFTLEVBQUU7UUFDVDtZQUNFLE1BQU0sRUFBRSxNQUFNO1lBQ2QsS0FBSyxFQUFFLFNBQVM7WUFDaEIsU0FBUyxFQUFFLG9DQUFTLENBQUMsS0FBSztZQUMxQixjQUFjLEVBQUU7Z0JBQ2QsV0FBVyxFQUFFLHVCQUF1QjthQUNyQztTQUNGO1FBQ0Q7WUFDRSxNQUFNLEVBQUUsZUFBZTtZQUN2QixLQUFLLEVBQUUsMEJBQTBCO1lBQ2pDLFFBQVEsRUFBRSxJQUFJO1lBQ2QsU0FBUyxFQUFFLG9DQUFTLENBQUMsWUFBWTtZQUNqQyxjQUFjLEVBQUU7Z0JBQ2QsT0FBTyxFQUFFO29CQUNQO3dCQUNFLEtBQUssRUFBRSxpQkFBaUI7d0JBQ3hCLEtBQUssRUFBRSxXQUFXO3FCQUNuQjtvQkFDRDt3QkFDRSxLQUFLLEVBQUUsaUJBQWlCO3dCQUN4QixLQUFLLEVBQUUsZ0JBQWdCO3FCQUN4QjtvQkFDRDt3QkFDRSxLQUFLLEVBQUUsNEJBQTRCO3dCQUNuQyxLQUFLLEVBQUUsa0JBQWtCO3FCQUMxQjtvQkFDRDt3QkFDRSxLQUFLLEVBQUUsNkJBQTZCO3dCQUNwQyxLQUFLLEVBQUUscUJBQXFCO3FCQUM3QjtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtJQUNELE9BQU8sRUFBRSxLQUFLLFdBQVUsSUFBSSxFQUFFLE9BQU87UUFDbkMsTUFBTSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDeEQsTUFBTSxNQUFNLEdBQUcsa0NBQWtDLENBQUM7UUFDbEQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksYUFBYSxLQUFLLFdBQVcsRUFBRSxDQUFDO1lBQ2xDLE1BQU0sR0FBRyxZQUFZLElBQUksRUFBRSxDQUFDO1FBQzlCLENBQUM7YUFDSSxJQUFJLGFBQWEsS0FBSyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzVDLE1BQU0sR0FBRyxvQkFBb0IsSUFBSSxFQUFFLENBQUM7UUFDdEMsQ0FBQzthQUNJLElBQUksYUFBYSxLQUFLLGtCQUFrQixFQUFFLENBQUM7WUFDOUMsTUFBTSxHQUFHLCtCQUErQixJQUFJLEVBQUUsQ0FBQztRQUNqRCxDQUFDO2FBQ0ksSUFBSSxhQUFhLEtBQUsscUJBQXFCLEVBQUUsQ0FBQztZQUNqRCxNQUFNLEdBQUcsZ0NBQWdDLElBQUksRUFBRSxDQUFDO1FBQ2xELENBQUM7UUFDRCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUEsd0JBQVcsRUFBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDakQsT0FBTztZQUNMLElBQUksRUFBRSxRQUFRO1NBQ2YsQ0FBQztJQUNOLENBQUM7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsb0NBQVMsQ0FBQyxNQUFNO1FBQ3RCLFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRTtnQkFDSixJQUFJLEVBQUUsb0NBQVMsQ0FBQyxNQUFNO2dCQUN0QixLQUFLLEVBQUUsUUFBUTthQUNoQjtTQUNKO0tBQ0Y7Q0FDRixDQUFDLENBQUM7QUFFSCxrQkFBZSxrQ0FBTyxDQUFDIn0=