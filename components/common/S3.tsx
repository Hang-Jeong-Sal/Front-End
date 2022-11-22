import Image from 'next/image';
import { uploadFile } from '../../lib/aws/s3';
import styles from '../../styles/Home.module.css';
import { useState } from 'react';

const ImageUpload = () => {
    const [url, setUrl] = useState("/default.svg");
    return (
        <div className={styles.grid}>
            {/* Test code for S3 */}
            <div className={styles.card}>
                <h2>
                    <Image
                        src={url}
                        alt="image test"
                        height={200}
                        width={200} />
                </h2>

                <input
                    type="file"
                    onChange={
                        (e) => {
                            if (e.target.files) {
                                uploadFile(e.target.files[0])
                                    .then((res) => {
                                        setUrl(res.Location);
                                    })
                                    .catch((err) => {
                                        setUrl("/default.svg")
                                    });
                            }
                        }
                    }
                />
            </div>
        </div>
    )
}

export default ImageUpload;