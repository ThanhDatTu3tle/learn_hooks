import { useState, useEffect } from "react";

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM

// 2. useEffect(callback, [])
// - Chỉ gọi callback một lần sau khi component mounted

// 3. useEffect(callback, [deps])
// - Callback sẽ được gọi lại mỗi khi deps thay đổi

// ----------------------------------
// Lý thuyết chung
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi component unmounted
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

function PreviewAvatar() {
  const [avatar, setAvatar] = useState()

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar])

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0]

    file.preview = URL.createObjectURL(file)

    setAvatar(file)
  }

  return (
    <div>
      <h1>Avatar</h1>
      <input 
        type="file"     
        onChange={handlePreviewAvatar} 
      />
      {avatar && (
        <img src={avatar.preview} alt="" width="80%"/>
      )}
    </div>
  )
}

export default PreviewAvatar;
