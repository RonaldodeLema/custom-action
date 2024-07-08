
import { testAction, createActionContext } from '@lark-opdev/block-basekit-server-api';

async function test() {
    const actionContext = await createActionContext({
      tenantAccessToken: '',
    });
    
    testAction({
        text: 'Làm cách nào để giúp Hoài Linh vào bờ tối nay ?',
        transformType: 'questionAnswer',
    },
    actionContext);
}

test();
      