// DOM Elements
const animationContainer = document.getElementById('animationContainer');
const wordCounter = document.getElementById('wordCounter');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const wordList = document.getElementById('wordList');

// Vietnamese word chain
const words = ["đảm đương", "đương đầu", "đầu ối", "ối dào", "dào ôi", "ôi thôi", "thôi việc", "việc làm", "làm ải", "ải quan", "quan điểm", "điểm ảnh", "ảnh hưởng", "hưởng ứng", "ứng đối", "đối địch", "địch vận", "vận động", "động đất", "đất đỏ", "đỏ đắn", "đắn đo", "đo đếm", "đếm xỉa", "xỉa xói", "xói móc", "móc đơn", "đơn độc", "độc ẩm", "ẩm ướt", "ướt đầm", "đầm ấm", "ấm ức", "ức đoán", "đoán định", "định ước", "ước vọng", "vọng tộc", "tộc trưởng", "trưởng đoàn", "đoàn viên", "viên tịch", "tịch thâu", "thâu tóm", "tóm tắt", "tắt thở", "thở than", "than đá", "đá đưa", "đưa đẩy", "đẩy mạnh", "mạnh tay", "tay ấn", "ấn tượng", "tượng đài", "đài trang", "trang âm", "âm ỉ", "ỉ ê", "ê tô", "tô vẽ", "vẽ trò", "trò đời", "đời thường", "thường xuyên", "xuyên táo", "táo tợn", "tợn tạo", "tạo vật", "vật vờ", "vờ vịt", "vịt đàn", "đàn ống", "ống xả", "xả đông", "đông đặc", "đặc ân", "ân đức", "đức độ", "độ vĩ", "vĩ đại", "đại đội", "đội ơn", "ơn nghĩa", "nghĩa địa", "địa ốc", "ốc đảo", "đảo điện", "điện đàm", "đàm đạo", "đạo ôn", "ôn đới", "đới cầu", "cầu đường", "đường đột", "đột xuất", "xuất xử", "xử tử", "tử vong", "vong nhân", "nhân ái", "ái tình", "tình ý", "ý đồ", "đồ đệ", "đệ trình", "trình tự", "tự đắc", "đắc tội", "tội ác", "ác vàng", "vàng đen", "đen tối", "tối ưu", "ưu đãi", "đãi đằng", "đằng thằng", "thằng chả", "chả trách", "trách nhiệm", "nhiệm vụ", "vụ lợi", "lợi ích", "ích xì", "xì xào", "xào xáo", "xáo xác", "xác đáng", "đáng ra", "ra điều", "điều đình", "đình đốn", "đốn mạt", "mạt sát", "sát trùng", "trùng điệp", "điệp ngữ", "ngữ đoạn", "đoạn tuyệt", "tuyệt đỉnh", "đỉnh chung", "chung đụng", "đụng chạm", "chạm trổ", "trổ tài", "tài xế", "xế tà", "tà tâm", "tâm tưởng", "tưởng thưởng", "thưởng trăng", "trăng trối", "trối kệ", "kệ thây", "thây ma", "ma vương", "vương vất", "vất vả", "vả lại", "lại sức", "sức ép", "ép uổng", "uổng phí", "phí tổn", "tổn thọ", "thọ giới", "giới tửu", "tửu điếm", "điếm đàng", "đàng hoàng", "hoàng đế", "đế đô", "đô đốc", "đốc tờ", "tờ rời", "rời rã", "rã đám", "đám xá", "xá xíu", "xíu mại", "mại dâm", "dâm đãng", "đãng trí", "trí óc", "óc đậu", "đậu đũa", "đũa cả", "cả tin", "tin đồn", "đồn điền", "điền thanh", "thanh đạm", "đạm bạc", "bạc phận", "phận sự", "sự tích", "tích tụ", "tụ xoay", "xoay vần", "vần xuôi", "xuôi tai", "tai ương", "ương gàn", "gàn dở", "dở người", "người ở", "ở ẩn", "ẩn số", "số ảo", "ảo thuật", "thuật toán", "toán đố", "đố kỵ", "kỵ sĩ", "sĩ phu", "phu thê", "thê thảm", "thảm trạng", "trạng từ", "từ điển", "điển trai", "trai trẻ", "trẻ trung", "trung vệ", "vệ tinh", "tinh xảo", "xảo trá", "trá hình", "hình vị", "vị tất", "tất yếu", "yếu ớt", "ớt ngọt", "ngọt sắc", "sắc đẹp", "đẹp đôi", "đôi thạch", "thạch tín", "tín phong", "phong vân", "vân vũ", "vũ điệu", "điệu đà", "đà điểu", "điểu học", "học đòi", "đòi hỏi", "hỏi đáp", "đáp án", "án treo", "treo giò", "giò lụa", "lụa là", "là lạ", "lạ nhà", "nhà ăn", "ăn đứt", "đứt đuôi", "đuôi gà", "gà đồng", "đồng đẳng", "đẳng áp", "áp đặt", "đặt để", "để trở", "trở trời", "trời đánh", "đánh đổi", "đổi thay", "thay vì", "vì thế", "thế tục", "tục tằn", "tằn tiện", "tiện thể", "thể trọng", "trọng tải", "tải thương", "thương đau", "đau ốm", "ốm đòn", "đòn xóc", "xóc đĩa", "đĩa đệm", "đệm bóng", "bóng đè", "đè nén", "nén lòng", "lòng đào", "đào tẩu", "tẩu tán", "tán xạ", "xạ trị", "trị thuỷ", "thuỷ văn", "văn vẻ", "vẻ vang", "vang lừng", "lừng lững", "lững lờ", "lờ tịt", "tịt ngòi", "ngòi nổ", "nổ súng", "súng đạn", "đạn dược", "dược tính", "tính đảng", "đảng uỷ", "uỷ thác", "thác loạn", "loạn đả", "đả thông", "thông tỏ", "tỏ tường", "tường vi", "vi vu", "vu vạ", "vạ miệng", "miệng tiếng", "tiếng tăm", "tăm tia", "tia tía", "tía lia", "lia chia", "chia phôi", "phôi thai", "thai sản", "sản sinh", "sinh đẻ", "đẻ đái", "đái tháo", "tháo thân", "thân đốt", "đốt sống", "sống trâu", "trâu nước", "nước xuýt", "xuýt xoa", "xoa dịu", "dịu hiền", "hiền triết", "triết lý", "lý thú", "thú y", "y tế", "tế nhị", "nhị thức", "thức tỉnh", "tỉnh thành", "thành tựu", "tựu trường", "trường đấu", "đấu võ", "võ tướng", "tướng tá", "tá túc", "túc tắc", "tắc tị", "tị hiềm", "hiềm thù", "thù oán", "oán thán", "thán phục", "phục tùng", "tùng tiệm", "tiệm tiến", "tiến triển", "triển khai", "khai trừ", "trừ phi", "phi đao", "đao phủ", "phủ thừa", "thừa thắng", "thắng thầu", "thầu khoán", "khoán trắng", "trắng xoá", "xoá sổ", "sổ sách", "sách lược", "lược thưa", "thưa vắng", "vắng teo", "teo tóp", "tóp tép", "tép riu", "riu ríu", "ríu ran", "ran rát", "rát mặt", "mặt trụ", "trụ trì", "trì níu", "níu áo", "áo tắm", "tắm táp", "táp nham", "nham nhảm", "nhảm nhí", "nhí nhố", "nhố nhăng", "nhăng cuội", "cuội kết", "kết tóc", "tóc xanh", "xanh xao", "xao nhãng", "nhãng quên", "quên lửng", "lửng lơ", "lơ xe", "xe đạp", "đạp đổ", "đổ điêu", "điêu đứng", "đứng tên", "tên tuổi", "tuổi tôi", "tôi rèn", "rèn luyện", "luyện tập", "tập tàng", "tàng trữ", "trữ lượng", "lượng thứ", "thứ tư", "tư vấn", "vấn đề", "đề xướng", "xướng hoạ", "hoạ tiết", "tiết trinh", "trinh thám", "thám thính", "thính phòng", "phòng xa", "xa xưa", "xưa nay", "nay mai", "mai sau", "sau rốt", "rốt cục", "cục tác", "tác quái", "quái quỷ", "quỷ thần", "thần tốc", "tốc lực", "lực lưỡng", "lưỡng quyền", "quyền uy", "uy nghiêm", "nghiêm phụ", "phụ tố", "tố tụng", "tụng ca", "ca ve", "ve vãn", "vãn hồi", "hồi xuân", "xuân thu", "thu xếp", "xếp hạng", "hạng ngạch", "ngạch trật", "trật lất", "lất phất", "phất trần", "trần gian", "gian tặc", "tặc lưỡi", "lưỡi lê", "lê la", "la ó", "ó cá", "cá ông", "ông xã", "xã luận", "luận thuyết", "thuyết pháp", "pháp tuyến", "tuyến yên", "yên ổn", "ổn thoả", "thoả thích", "thích nghi", "nghi ngờ", "ngờ ngạc", "ngạc nhiên", "nhiên liệu", "liệu hồn", "hồn vía", "vía van", "van xin", "xin đểu", "đểu giả", "giả đò", "đò ngang", "ngang trái", "trái tim", "tim tím", "tím tái", "tái tê", "tê thấp", "thấp tầng", "tầng nấc", "nấc cụt", "cụt hứng", "hứng khởi", "khởi tranh", "tranh đua", "đua ganh", "ganh ghẻ", "ghẻ ruồi", "ruồi nhặng", "nhặng bộ", "bộ não", "não nề", "nề nếp", "nếp tẻ", "tẻ nhạt", "nhạt phai", "phai mờ", "mờ ám", "ám thị", "thị tỳ", "tỳ bà", "bà đỡ", "đỡ đần", "đần độn", "độn thổ", "thổ tả", "tả tơi", "tơi tới", "tới bến", "bến tàu", "tàu vét", "vét xi", "xi rô", "rô to", "to nhỏ", "nhỏ nhẹ", "nhẹ thênh", "thênh thang", "thang máy", "máy xúc", "xúc xích", "xích đu", "đu quay", "quay vòng", "vòng đai", "đai truyền", "truyền thụ", "thụ phấn", "phấn sáp", "sáp ong", "ong óng", "óng ánh", "ánh sáng", "sáng trưng", "trưng vay", "vay lãi", "lãi suất", "suất vốn", "vốn dĩ", "dĩ vãng", "vãng lai", "lai tạp", "tạp phẩm", "phẩm tước", "tước lộc", "lộc nhung", "nhung nhúc", "nhúc nhắc", "nhắc chừng", "chừng như", "như điên", "điên rồ", "rồ dại", "dại gái", "gái nhảy", "nhảy ổ", "ổ voi", "voi giày", "giày đinh", "đinh tráng", "tráng lệ", "lệ thuộc", "thuộc làu", "làu nhàu", "nhàu nát", "nát rượu", "rượu thuốc", "thuốc tẩy", "tẩy uế", "uế khí", "khí trơ", "trơ mắt", "mắt phượng", "phượng tây", "tây thiên", "thiên tào", "tào lao", "lao tù", "tù đầy", "đầy tháng", "tháng thiếu", "thiếu đói", "đói rách", "rách mướp", "mướp đắng", "đắng cay", "cay sè", "sè sẽ", "sẽ sàng", "sàng tuyển", "tuyển thủ", "thủ tiêu", "tiêu thoát", "thoát ly", "ly kỳ", "kỳ thực", "thực tại", "tại trận", "trận tiền", "tiền đúc", "đúc rút", "rút ruột", "ruột rà", "rà soát", "soát xét", "xét nghiệm", "nghiệm đúng", "đúng mực", "mực thước", "thước thợ", "thợ xây", "xây lắp", "lắp ráp", "ráp nối", "nối tiếp", "tiếp đón", "đón nhận", "nhận lời", "lời tựa", "tựa nương", "nương rẫy", "rẫy chết", "chết tốt", "tốt tươi", "tươi vui", "vui đùa", "đùa nghịch", "nghịch phách", "phách lối", "lối xóm", "xóm thôn", "thôn ấp", "ấp ủ", "ủ bệnh", "bệnh viện", "viện trợ", "trợ thời", "thời thượng", "thượng uyển", "uyển chuyển", "chuyển phát", "phát tang", "tang quyến", "quyến luyến", "luyến tiếc", "tiếc rẻ", "rẻ thối", "thối tha", "tha thẩn", "thẩn thơ", "thơ ấu", "ấu trĩ", "trĩ mũi", "mũi dãi", "dãi dầu", "dầu đèn", "đèn đuốc", "đuốc hoa", "hoa đăng", "đăng quang", "quang vinh", "vinh quy", "quy tiên", "tiên tổ", "tổ tông", "tông môn", "môn khách", "khách sáo", "sáo rỗng", "rỗng không", "không quân", "quân sư", "sư thầy", "thầy tu", "tu thư", "thư thả", "thả nổi", "nổi xung", "xung quanh", "quanh quánh", "quánh quạnh", "quạnh hiu", "hiu hắt", "hắt hơi", "hơi hướng", "hướng thiện", "thiện cảm", "cảm phiền", "phiền phức", "phức hợp", "hợp tan", "tan vỡ", "vỡ nợ", "nợ máu", "máu xương", "xương sông", "sông núi", "núi rừng", "rừng già", "già lão", "lão suy", "suy đồi", "đồi truỵ", "truỵ lạc", "lạc nghiệp", "nghiệp dư", "dư dật", "dật sử", "sử thi", "thi viết", "viết lách", "lách tách", "tách bạch", "bạch yến", "yến tiệc", "tiệc trà", "trà thất", "thất đảm", "đảm đang", "đang cai", "cai tổng", "tổng trấn", "trấn tĩnh", "tĩnh mạch", "mạch nha", "nha khoa", "khoa trương", "trương tuần", "tuần tra", "tra tấn", "tấn công", "công tơ", "tơ vò", "vò xé", "xé rào", "rào cản", "cản phá", "phá vây", "vây cánh", "cánh trả", "trả góp", "góp phần", "phần trăm", "trăm năm", "năm ba", "ba xu", "xu mị", "mị dân", "dân quê", "quê quán", "quán triệt", "triệt hạ", "hạ sơn", "sơn trại", "trại giam", "giam lỏng", "lỏng chỏng", "chỏng vó", "vó câu", "câu thúc", "thúc giục", "giục giặc", "giặc lái", "lái buôn", "buôn làng", "làng chơi", "chơi xỏ", "xỏ lá", "lá thắm", "thắm thiết", "thiết triều", "triều kiến", "kiến trúc", "trúc trắc", "trắc diện", "diện mạo", "mạo xưng", "xưng hô", "hô hố", "hố ga", "ga men", "men sứ", "sứ mệnh", "mệnh lệnh", "lệnh lang", "lang bạt", "bạt mạng", "mạng mỡ", "mỡ sa", "sa thải", "thải loại", "loại bỏ", "bỏ túi", "túi tham", "tham ô", "ô trọc", "trọc phú", "phú quý", "quý mến", "mến yêu", "yêu quí", "quí hồ", "hồ sơ", "sơ thẩm", "thẩm thấu", "thấu đáo", "đáo hạn", "hạn hẹp", "hẹp bụng", "bụng dạ", "dạ khúc", "khúc mắc", "mắc mỏ", "mỏ nhát", "nhát gừng", "gừng gió", "gió mùa", "mùa màng", "màng nhĩ", "nhĩ châm", "châm cứu", "cứu quốc", "quốc nội", "nội xâm", "xâm phạm", "phạm trù", "trù ẻo", "ẻo lả", "lả lướt", "lướt ván", "ván ngựa", "ngựa hồng", "hồng quế", "quế chi", "chi phối", "phối màu", "màu mè", "mè nheo", "nheo nhóc", "nhóc con", "con trượt", "trượt tuyết", "tuyết sương", "sương mù", "mù u", "u ơ", "ơ hay", "hay ho", "ho khan", "khan hiếm", "hiếm muộn", "muộn mằn", "mằn mặn", "mặn nồng", "nồng nực", "nực cười", "cười sặc", "sặc mùi", "mùi mẫn", "mẫn cán", "cán cân", "cân xô", "xô bồ", "bồ nông", "nông nỗi", "nỗi niềm", "niềm riêng", "riêng lẻ", "lẻ loi", "loi choi", "choi chói", "chói chang", "chang bang", "bang giao", "giao phó", "phó nháy", "nháy kép", "kép hát", "hát ví", "ví thử", "thử thách", "thách cưới", "cưới chạy", "chạy mánh", "mánh mung", "mung lung", "lung tung", "tung tăng", "tăng ni", "ni cô", "cô quả", "quả đấm", "đấm bóp", "bóp cổ", "cổ tức", "tức thì", "thì thụt", "thụt lùi", "lùi bước", "bước đi", "đi đêm", "đêm ngày", "ngày trước", "trước nhất", "nhất tề", "tề gia", "gia phả", "phả hệ", "hệ thống", "thống lĩnh", "lĩnh hội", "hội thảo", "thảo nguyên", "nguyên vẹn", "vẹn toàn", "toàn tòng", "tòng ngũ", "ngũ đoản", "đoản kiếm", "kiếm hiệp", "hiệp nghị", "nghị quyết", "quyết liệt", "liệt truyện", "truyện vừa", "vừa qua", "qua loa", "loa kèn", "kèn trống", "trống ếch", "ếch nhái", "nhái bén", "bén gót", "gót sắt", "sắt cầm", "cầm giữ", "giữ ghế", "ghế tréo", "tréo mảy", "mảy may", "may so", "so sánh", "sánh vai", "vai cày", "cày úp", "úp thìa", "thìa canh", "canh tân", "tân kì", "kì mục", "mục đích", "đích tôn", "tôn ti", "ti tỉ", "tỉ thí", "thí chủ", "chủ quản", "quản lí", "lí tí", "tí chút", "chút ít", "ít oi", "oi khói", "khói lửa", "lửa hương", "hương nhu", "nhu mì", "mì thánh", "thánh mẫu", "mẫu mã", "mã hoá", "hoá năng", "năng khiếu", "khiếu kiện", "kiện khang", "khang kháng", "kháng cự", "cự li", "li hôn", "hôn mê", "mê đắm", "đắm chìm", "chìm ngập", "ngập tràn", "tràn lan", "lan toả", "toả nhiệt", "nhiệt kế", "kế cận", "cận trên", "trên hết", "hết lẽ", "lẽ phải", "phải quấy", "quấy rối", "rối bù", "bù lỗ", "lỗ mãng", "mãng xà", "xà cừ", "cừ khôi", "khôi hài", "hài nhi", "nhi nữ", "nữ trầm", "trầm uất", "uất nghẹn", "nghẹn đòng", "đòng đong", "đong lường", "lường gạt", "gạt tàn", "tàn phế", "phế bào", "bào ngư", "ngư lôi", "lôi long", "long nhãn", "nhãn lồng", "lồng lộng", "lộng hành", "hành kinh", "kinh sợ", "sợ hãi", "hãi hùng", "hùng hổ", "hổ thẹn", "thẹn thò", "thò lò", "lò mổ", "mổ cò", "cò cử", "cử tri", "tri kỷ", "kỷ lục", "lục sục", "sục sôi", "sôi gan", "gan góc", "góc ngoài", "ngoài lề", "lề thói", "thói quen", "quen biết", "biết mấy", "mấy chốc", "chốc lở", "lở tở", "tở mở", "mở toang", "toang hoang", "hoang mang", "mang chủng", "chủng chẳng", "chẳng những", "những ai", "ai điếu", "điếu phúng", "phúng viếng", "viếng thăm", "thăm nuôi", "nuôi trồng", "trồng răng", "răng sữa", "sữa chua", "chua chát", "chát chúa", "chúa nhật", "nhật nguyệt", "nguyệt san", "san lấp", "lấp lú", "lú lẫn", "lẫn lộn", "lộn sòng", "sòng phẳng", "phẳng lặng", "lặng thầm", "thầm vụng", "vụng trộm", "trộm nghe", "nghe ngóng", "ngóng đợi", "đợi chờ", "chờ mong", "mong mỏi", "mỏi mệt", "mệt nghỉ", "nghỉ mát", "mát lành", "lành lạnh", "lạnh tanh", "tanh tao", "tao nhã", "nhã nhạc", "nhạc lễ", "lễ giáo", "giáo xứ", "xứ sở", "sở hữu", "hữu tỷ", "tỷ giá", "giá sàn", "sàn diễn", "diễn giảng", "giảng hoà", "hoà nhập", "nhập tràng", "tràng kỉ", "kỉ cương", "cương trực", "trực thăng", "thăng hà", "hà rầm", "rầm rập", "rập khuôn", "khuôn khổ", "khổ sai", "sai lầm", "lầm lỡ", "lỡ duyên", "duyên hải", "hải âu", "âu thuyền", "thuyền rồng", "rồng rắn", "rắn mối", "mối hàng", "hàng khô", "khô mộc", "mộc bản", "bản sao", "sao tẩm", "tẩm bổ", "bổ sung", "sung mãn", "mãn khoá", "khoá nòng", "nòng cột", "cột xăng", "xăng đan", "đan chen", "chen lấn", "lấn sân", "sân khấu", "khấu hao", "hao sút", "sút kém", "kém cạnh", "cạnh khế", "khế cơm", "cơm gạo", "gạo giã", "giã biệt", "biệt lập", "lập phương", "phương cách", "cách chức", "chức dịch", "dịch hoàn", "hoàn mỹ", "mỹ kí", "kí lô", "lô lốc", "lốc lịch", "lịch kịch", "kịch nói", "nói vợ", "vợ lớn", "lớn khôn", "khôn xiết", "xiết bao", "bao trùm", "trùm sò", "sò huyết", "huyết tương", "tương phản", "phản phúc", "phúc kiểm", "kiểm ngân", "ngân khố", "khố dây", "dây pha", "pha chế", "chế biến", "biến thái", "thái quá", "quá khích", "khích bác", "bác mẹ", "mẹ đĩ", "đĩ bợm", "bợm bãi", "bãi miễn", "miễn giảm", "giảm chấn", "chấn song", "song loan", "loan báo", "báo đền", "đền bồi", "bồi dưỡng", "dưỡng liêm", "liêm phóng", "phóng túng", "túng quẫn", "quẫn bách", "bách phân", "phân vùng", "vùng sâu", "sâu rộng", "rộng cẳng", "cẳng chân", "chân nâng", "nâng cốc", "cốc láo", "láo liên", "liên ngành", "ngành ngọn", "ngọn nguồn", "nguồn gốc", "gốc rễ", "rễ củ", "củ cẩm", "cẩm tú", "tú ụ", "ụ pháo", "pháo kích", "kích hoạt", "hoạt cảnh", "cảnh cáo", "cáo thoái", "thoái trào", "trào lưu", "lưu niên", "niên hiệu", "hiệu đính", "đính chính", "chính qui", "qui chụp", "chụp mũ", "mũ nồi", "nồi hầm", "hầm hào", "hào sảng", "sảng khoái", "khoái khẩu", "khẩu cung", "cung tần", "tần tảo", "tảo mộ", "mộ chí", "chí nguy", "nguy nan", "nan giải", "giải sầu", "sầu bi", "bi da", "da dâu", "dâu bể", "bể cạn", "cạn kiệt", "kiệt cùng", "cùng tận", "tận dụng", "dụng cụ", "cụ kị", "kị binh", "binh lính", "lính dù", "dù cho", "cho nên", "nên danh", "danh dự", "dự bị", "bị chú", "chú dẫn", "dẫn hoả", "hoả châu", "châu ngọc", "ngọc thỏ", "thỏ thẻ", "thẻ bài", "bài ngoại", "ngoại kiều", "kiều hối", "hối đoái", "đoái hoài", "hoài của", "của cải", "cải sửa", "sửa sang", "sang giàu", "giàu có", "có hậu", "hậu cần", "cần trục", "trục lăn", "lăn kềnh", "kềnh càng", "càng cua", "cua gạch", "gạch chỉ", "chỉ bảo", "bảo kê", "kê biên", "biên thuỳ", "thuỳ dương", "dương oai", "oai linh", "linh diệu", "diệu huyền", "huyền phù", "phù hộ", "hộ đê", "đê quai", "quai hàm", "hàm tiếu", "tiếu lâm", "lâm thâm", "thâm thủng", "thủng thẳng", "thẳng tuột", "tuột dốc", "dốc thoải", "thoải mái", "mái chèo", "chèo kéo", "kéo co", "co vòi", "vòi vĩnh", "vĩnh viễn", "viễn du", "du di", "di căn", "căn cơ", "cơ thắt", "thắt ngặt", "ngặt nghèo", "nghèo khó", "khó khăn", "khăn đóng", "đóng cửa", "cửa cuốn", "cuốn chiếu", "chiếu cố", "cố chấp", "chấp bút", "bút lông", "lông bông", "bông gòn", "gòn gọn", "gọn hơ", "hơ hỏng", "hỏng kiểu", "kiểu dáng", "dáng dấp", "dấp dính", "dính líu", "líu lo", "lo buồn", "buồn tủi", "tủi cực", "cực tiểu", "tiểu cao", "cao siêu", "siêu trứng", "trứng cuốc", "cuốc chim", "chim ngói", "ngói bò", "bò cạp", "cạp quần", "quần quật", "quật cường", "cường giáp", "giáp bảng", "bảng biểu", "biểu hiện", "hiện kim", "kim cúc", "cúc bấm", "bấm giờ", "giờ khắc", "khắc ghi", "ghi bàn", "bàn cờ", "cờ quạt", "quạt cây", "cây cỏ", "cỏ gấu", "gấu lợn", "lợn cà", "cà phê", "phê bình", "bình bầu", "bầu bán", "bán chịu", "chịu thua", "thua thiệt", "thiệt hơn", "hơn hớn", "hớn hở", "hở hang", "hang hùm", "hùm beo", "beo béo", "béo núc", "núc ních"];

// Animation variables
let currentIndex = 0;
let wordBoxes = [];
let animationInterval;
let isPlaying = false;

// Fixed spacing between words (in pixels)
const WORD_SPACING = 360;

// Calculate center position of the screen
function getCenterPosition() {
  // Calculate the absolute center of the screen, including the list view width
  return window.innerWidth / 2;
}

// Sound effect for new word appearance
function playPopSound() {
  try {
    // Create audio context
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Create oscillator
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    // Configure sound
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, audioContext.currentTime); // A5
    oscillator.frequency.exponentialRampToValueAtTime(440, audioContext.currentTime + 0.1); // A4

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

    // Connect and play
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.3);
  } catch (e) {
    console.log("Sound not supported:", e);
  }
}

// Create a new word box
function createWordBox(text, index) {
  const wordBox = document.createElement('div');
  wordBox.className = 'word-box';

  const wordText = document.createElement('div');
  wordText.className = 'word-text';
  wordText.textContent = text;

  wordBox.appendChild(wordText);
  animationContainer.appendChild(wordBox);

  // Set initial position (off-screen to the right)
  wordBox.style.transform = `translateX(${window.innerWidth}px)`;
  wordBox.style.opacity = '0';

  return wordBox;
}

// Position all word boxes with EQUAL spacing
function positionWordBoxes() {
  const centerPosition = getCenterPosition();

  wordBoxes.forEach((box, idx) => {
    const relativeIndex = idx - currentIndex + 1; // 0 = already shown, 1 = current, 2+ = upcoming

    // Calculate exact position
    // Center position - (WORD_SPACING/2) ensures the current word is centered
    // relativeIndex * WORD_SPACING ensures equal spacing
    const xPosition = centerPosition - (WORD_SPACING/2) + relativeIndex * WORD_SPACING;

    if (relativeIndex <= 0) {
      // Words that have already appeared
      const opacity = Math.max(0, 1 + relativeIndex * 0.3);
      box.style.opacity = opacity.toString();
      box.style.transform = `translateX(${xPosition}px)`;

      if (opacity === 0) {
        box.style.visibility = 'hidden';
      } else {
        box.style.visibility = 'visible';
      }
    } else if (relativeIndex === 1) {
      // Current word - with impact effect
      box.style.opacity = '1';
      box.style.visibility = 'visible';

      // Apply impact effect
      box.style.transform = `translateX(${xPosition}px) scale(1.2)`;
      box.querySelector('.word-text').style.textShadow = '0 0 8px #fff, 0 0 15px #fff';

      // Reset to normal after the impact
      setTimeout(() => {
        box.style.transform = `translateX(${xPosition}px) scale(1)`;
        box.querySelector('.word-text').style.textShadow = '0 0 2px #fff, 0 0 5px #fff';
      }, 400);
    } else {
      // Upcoming words
      box.style.opacity = '0';
      box.style.transform = `translateX(${window.innerWidth}px)`;
      box.style.visibility = 'hidden';
    }
  });

  // Update active word in list view
  updateActiveWordInList();
}

// Create the list view of all words
function createWordList() {
  // Clear the list first
  wordList.innerHTML = '';

  // Add each word to the list
  words.forEach((word, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'word-list-item';
    listItem.dataset.index = index;

    const wordIndex = document.createElement('span');
    wordIndex.className = 'word-index';
    wordIndex.textContent = `${index + 1}.`;

    listItem.appendChild(wordIndex);
    listItem.appendChild(document.createTextNode(word));

    // Add click event to jump to this word
    listItem.addEventListener('click', () => {
      jumpToWord(index);
    });

    wordList.appendChild(listItem);
  });
}

// Update which word is active in the list view
function updateActiveWordInList() {
  // Remove active class from all items
  const listItems = wordList.querySelectorAll('.word-list-item');
  listItems.forEach(item => item.classList.remove('active'));

  // Add active class to current word
  if (currentIndex > 0 && currentIndex <= words.length) {
    const activeItem = wordList.querySelector(`.word-list-item[data-index="${currentIndex - 1}"]`);
    if (activeItem) {
      activeItem.classList.add('active');

      // Do not auto-scroll to the active item, allowing free scrolling
      // We'll only scroll on first load and reset
    }
  }
}

// Jump to a specific word in the animation
function jumpToWord(index) {
  if (index >= 0 && index < words.length) {
    // Store the current playing state
    const wasPlaying = isPlaying;

    // Stop any current animation
    stopAnimation();

    // Set the current index
    currentIndex = index;

    // Remove all existing word boxes
    while (animationContainer.firstChild) {
      animationContainer.removeChild(animationContainer.firstChild);
    }

    wordBoxes = [];

    // Create word boxes for all words up to the target index
    for (let i = 0; i <= index; i++) {
      const wordBox = createWordBox(words[i], i);
      wordBoxes.push(wordBox);
    }

    // Update the counter
    currentIndex = index + 1;
    wordCounter.textContent = `Từ số ${currentIndex}/${words.length}`;

    // Reposition all words
    positionWordBoxes();

    // When explicitly clicking a word in the list, scroll to it
    const clickedItem = wordList.querySelector(`.word-list-item[data-index="${index}"]`);
    if (clickedItem) {
      clickedItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // If it was playing before, restart the animation from this point
    if (wasPlaying && currentIndex < words.length) {
      setTimeout(() => {
        startAnimation();
      }, 300);
    }
  }
}

// Show next word in the chain
function nextWord() {
  if (currentIndex < words.length) {
    if (currentIndex === wordBoxes.length) {
      // Create new word box for the next word
      const newWordBox = createWordBox(words[currentIndex], currentIndex);
      wordBoxes.push(newWordBox);

      // Add sound effect
      playPopSound();
    }

    // Increment counter and update display
    currentIndex++;
    wordCounter.textContent = `Từ số ${currentIndex}/${words.length}`;

    // Reposition all words
    positionWordBoxes();

    // Stop if we've reached the end
    if (currentIndex >= words.length) {
      stopAnimation();
    }
  }
}

// Start the animation
function startAnimation() {
  if (!isPlaying) {
    isPlaying = true;
    animationInterval = setInterval(nextWord, 2000);
  }
}

// Stop the animation
function stopAnimation() {
  isPlaying = false;
  clearInterval(animationInterval);
}

// Reset the animation
function resetAnimation() {
  // Stop animation
  stopAnimation();
  currentIndex = 0;

  // Remove all word boxes
  while (animationContainer.firstChild) {
    animationContainer.removeChild(animationContainer.firstChild);
  }

  wordBoxes = [];

  // Initialize with first word
  if (words.length > 0) {
    const firstWordBox = createWordBox(words[0], 0);
    wordBoxes.push(firstWordBox);

    currentIndex = 1;
    wordCounter.textContent = `Từ số ${currentIndex}/${words.length}`;

    // Position words
    positionWordBoxes();

    // Scroll to first item only on reset
    const firstItem = wordList.querySelector(`.word-list-item[data-index="0"]`);
    if (firstItem) {
      firstItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Automatically restart animation
    setTimeout(() => {
      startAnimation();
    }, 500);
  }
}

// Adjust positions on window resize
window.addEventListener('resize', positionWordBoxes);

// Setup button event listeners
startBtn.addEventListener('click', startAnimation);
pauseBtn.addEventListener('click', stopAnimation);
resetBtn.addEventListener('click', resetAnimation);

// Initialize
createWordList();
resetAnimation();