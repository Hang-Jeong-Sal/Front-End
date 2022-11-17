import AWS from "aws-sdk";

type Region = 'ap-northeast-2';

const AWSCognitoPoolId: string = process.env.NEXT_PUBLIC_AWS_COGNITO_POOL_ID!;
const seoul: Region = "ap-northeast-2";
const bucket: string = "hang-jeong-sal";
const endpoint: string = "image/";

const configUpdate = (region: Region, identityPoolId: string) => {
    AWS.config.update({
        region: region,
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: identityPoolId,
        }),
    })
};

export const uploadFile = async (file: File) => {
    configUpdate(seoul, AWSCognitoPoolId);
    const upload = new AWS.S3.ManagedUpload({
        params: {
            Bucket: bucket,
            Key: endpoint + file.name,
            Body: file,
        },
    });

    return upload.promise();
};