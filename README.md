# Redux là gì?

Là thư viện quản lí state.

## Context API(useContext)
Ưu điểm:
-Là hook có sẵn trong React.
-Dễ setup và sử dụng.
Nhược điểm.
-Khó debug.
-Khi state thay đổi, thì sẽ render tất cả các Component đang dùng context đó.

## Redux
Nhược điểm:
Là một thư viện ngoài->Cài đặt -> tốn bundel size cho ứng dụng(2KB)
Tốn thời gian để setup.
ƯU điểm:
Có thể sử dụng redux devtool -> debug
Chỉ re-render các Component sử dụng data thay đổi.
### Tóm lại.
+Với những app nhỏ và sử dụng không quá phức tạp -> Context API.
_Với những app lớn  -> nên dùng Redux.