import DefaultImage from './Image/DefaultImage.png';
import { useRef, useState } from 'react';

const ProfileChange = () => {

    const [Image, setImage] = useState(DefaultImage);
    const [File, setFile] = useState('');
    const fileInput = useRef(null);

    const onChange = (e) => {  
        if (e.target.files[0]) {
          setFile(e.target.files[0]);
        } else {
          //업로드 취소할 시
          setImage(DefaultImage);
          return;
        }

            //화면에 프로필 사진 표시
        const reader = new FileReader(); 
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImage(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    };

    return(
        <div className="">
            <p>프로필변경</p>
            <div className="Profile">
                <img src={Image} alt="프로필 사진" className="" />
                <label className="" htmlFor="input-file">
                    <span className="">이미지 찾아보기</span>
                    <input type="file" id="input-file" accept="image/*" className=""
                    onClick={() => {
                        fileInput.current.value = null;
                        fileInput.current.click();
                      }}
                      ref={fileInput}
                      onChange={onChange}/>
                </label>
                <button type="button" className=""></button>
            </div>
        </div>
    )
}

export default ProfileChange;