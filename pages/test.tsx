import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import styles from '../styles/Test.module.css';

import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";

const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const Test = () => {
    const [method, setMethod] = useState<RequestMethod>('GET');
    const [url, setUrl] = useState<string>("");
    const [code, setCode] = useState<string>("");
    const [response, setResponse] = useState<AxiosResponse<any, any>>();

    const handleChange = (e: any) => {
        console.log(e);
    };

    const fetchResponse = async (method: RequestMethod, url: string, request: string) => {
        if (url === "") {
            setResponse({
                status: 0,
                statusText: "잘못 입력함",
                headers: {

                },
                config: {

                },
                data: "URL를 입력해주세요"
            });
        }
        else {
            const axiosConfig = {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: method,
                url: url,
                withCredentials: false
            };
            if(method === 'GET' || method === 'DELETE'){
                axios(axiosConfig)
                .then((res) => {
                    setResponse(res);
                    console.log(res.data);
                });
            }
            else {
                axios({...axiosConfig, data : request})
                .then((res) => {
                    setResponse(res);
                    console.log(res.data);
                });
            }
            
        }
    };

    return (
        <>
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className={styles.option}>
                        <select className={styles.action}
                            onChange={(e) => {
                                console.log(e.target.value);
                                setMethod(e.target.value as RequestMethod);
                            }}>
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                            <option value="PATCH">PATCH</option>
                            <option value="DELETE">DELETE</option>
                        </select>
                        <input
                            style={{
                                "width": "50vw",
                                "height": "5vh",
                                "fontSize": "16px",
                                "paddingLeft": "20px"
                            }}
                            placeholder="Request를 보낼 URL을 입력하세요"
                            onChange={(e) => {
                                console.log(e.target.value);
                                setUrl(e.target.value);
                            }}
                            type="text" />
                        <button
                            className={styles.action}
                            onClick={() => {
                                fetchResponse(method, url, code);
                            }}
                        >전송</button>
                    </div>

                    <br />

                    <div className={styles.request}>
                        <div className={styles.subtitle}>
                            <h3 >Request Body</h3>
                            <ul>
                                <li><b>{"주의 사항"}</b></li>
                                <li>{"문자열 작성시 \"\" (큰따옴표) 작성"}</li>
                                <li>{"GET, DELETE : Response Body를 작성해도 무시됩니다."}</li>
                                <li>{"POST, PUT, PATCH : Response Body를 작성 해야 합니다."}</li>
                            </ul>
                        </div>
                        <CodeEditor
                            value={code}
                            language="json"
                            placeholder="Request body를 JSON 형식으로 작성해주세요"
                            onChange={(evn) => {
                                console.log("code : ", evn.target.value);
                                setCode(evn.target.value)
                            }}
                            padding={15}
                            style={{
                                fontSize: 16,
                                backgroundColor: "black",
                                fontFamily:
                                    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                            }}
                        />
                    </div>

                    <div className={styles.response}>
                        <h3 className={styles.subtitle}>Response</h3>
                        <ul style={{"margin" : "0 0 0 20px", "padding" : "0"}}>
                            <li><h4>Status Code : {response?.status}</h4></li>
                            <li><h4>Status Text : {response?.statusText}</h4></li>
                        </ul>
                        <h5 className={styles.subtitle}>Header</h5>
                        <CodeEditor
                            value={JSON.stringify(response?.headers, null, 4)}
                            language="json"
                            placeholder="Response will be displayed here"
                            padding={15}
                            style={{
                                fontSize: 12,
                                backgroundColor: "black",
                                fontFamily:
                                    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                            }}
                        />
                        <h5 className={styles.subtitle}>body</h5>
                        <CodeEditor
                            value={JSON.stringify(response?.data, null, 4)}
                            language="json"
                            placeholder="Response will be displayed here"
                            padding={15}
                            style={{
                                fontSize: 12,
                                backgroundColor: "black",
                                fontFamily:
                                    "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                            }}
                        />
                    </div>
                </main>
            </div>
        </>
    );
};

export default Test;