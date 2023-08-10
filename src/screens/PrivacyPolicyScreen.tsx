/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../theme';
import React from 'react';
const {width} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';

const PrivacyPolicyScreen = ({route}) => {
  const title = route.params.title;
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  return (
    <View style={{position: 'relative'}} className="flex-1 bg-neutral-800 ">
      <SafeAreaView
        style={{
          backgroundColor: 'rgba(38, 38, 38, 0.7)',
          position: 'absolute',
          zIndex: 1,
          paddingBottom: -25,
          paddingTop: -8,
        }}
        className="{ios} ? -mb-2 : -mb-3">
        <View
          style={{width: width, paddingHorizontal: 20}}
          className="flex-row justify-between items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-xl p-1"
            style={styles.background}>
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>---{title}---</Text>
          </Text>
          <Icons name="newspaper-outline" size={28} color="#00AA13" />
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={{marginTop: 100, marginBottom: 20, paddingHorizontal: 20}}>
          <Text style={{fontSize: 14, color: 'white'}}>
            Khi chúng tôi cung cấp bất kỳ dịch vụ tương tác, chúng tôi sẽ cung
            cấp thông tin rõ ràng để bạn biết về loại dịch vụ được cung cấp, nếu
            nó được kiểm duyệt và hình thức kiểm duyệt được sử dụng, nếu có. Nếu
            bạn muốn khiếu nại về một bình luận được đăng trên trang web của
            chúng tôi hoặc bạn nghĩ rằng một bình luận đã được đăng là vi phạm
            chính sách sử dụng này xin vui lòng thông báo cho chúng tôi bằng
            cách sử dụng nút "tố giác" trên trang web của chúng tôi hoặc liên hệ
            với chúng tôi qua hello@student.com, chúng tôi sẽ xem xét sau đó.
            Xin lưu ý rằng tố giác bình luận không có nghĩa các bình luận bị tố
            giác sẽ được gỡ bỏ. Chúng tôi không chịu trách nhiệm giám sát hoặc
            kiểm tra bất kỳ dịch vụ tương tác mà chúng tôi cung cấp trên trang
            web của chúng tôi, và (ngoại trừ đối với người sử dụng ở Pháp, nơi
            chúng tôi có thể chỉ phải chịu trách nhiệm như quy định trong luật
            ủy thác trong lĩnh vực kinh tế kỹ thuật số ngày 6 tháng 6 năm 2004)
            chúng tôi rõ ràng loại trừ trách nhiệm pháp lý của chúng tôi cho bất
            kỳ tổn thất hoặc thiệt hại phát sinh từ việc sử dụng bất kỳ dịch vụ
            tương tác bởi người dùng trong sự vi phạm các tiêu chuẩn nội dung ,
            cho dù các dịch vụ được kiểm duyệt hay không. Khi chúng tôi phải
            kiểm duyệt một dịch vụ tương tác, chúng tôi thường cung cấp một
            phương tiện liên lạc với người điều tiết, nếu một mối quan tâm hoặc
            khó khăn nào đó nảy sinh.
          </Text>
          <Text style={{fontSize: 16, color: 'white', paddingVertical: 10}}>
            * Tiêu chuẩn nội dung
          </Text>
          <Text style={{fontSize: 14, color: 'white'}}>
            Các tiêu chuẩn nội dung này áp dụng cho bất kỳ và tất cả tài liệu mà
            bạn đóng góp vào trang web của chúng tôi ("sự đống góp") bao gồm các
            bài đánh giá và câu hỏi được gửi cho chúng tôi. Các tiêu chuẩn và
            các yêu cầu sau đây được áp dụng cho việc sử dụng và đóng góp của
            bạn cho trang web của chúng tôi. Đóng góp của bạn phải: có thông tin
            chính xác (nơi thông tin nhận định về sự kiện, bằng chứng); được
            cung cấp một cách chân thực (nơi thông tin cho biết về ý kiến); và
            tuân thủ theo pháp luật được áp dụng tại bất cứ nước nào nơi mà
            thông tin được đăng lên Sự đóng góp của bạn phải không: chứa bất kỳ
            thông tin nói xấu về người khác hoặc khiêu dâm, kích động, hận thù
            hay xúc phạm; tuyên truyền tài liệu khiêu dâm, bạo lực, phân biệt
            đối xử dựa trên chủng tộc, giới tính, tôn giáo, quốc tịch, khuyết
            tật, định hướng giới tính hay tuổi tác; vi phạm bất kỳ bản quyền,
            quyền sở hữu cơ sở dữ liệu hoặc nhãn hiệu thương mại hoặc các quyền
            lợi khác của bất kỳ người nào; có khả năng đánh lừa mọi người, kể cả
            sử dụng thông tin đóng góp của bạn để mạo danh bất kỳ người nào,
            hoặc xuyên tạc, giả danh hay mạo danh cộng tác với bất kỳ người nào;
            được thực hiện khi vi phạm bất kỳ nghĩa vụ pháp lý đối với bên thứ
            ba, chẳng hạn như vi phạm một hợp đồng hoặc một sự tín nhiệm; tuyên
            truyền bất kỳ hoạt động bất hợp pháp, hoặc ủng hộ, thúc đẩy hoặc hỗ
            trợ bất kỳ hành động phi pháp chẳng hạn như (bằng cách ví dụ) vi
            phạm bản quyền hoặc lạm dụng máy tính; đe dọa, lạm dụng hoặc xâm
            nhập sự riêng tư của người khác, hoặc gây khó chịu, bất tiện hoặc
            gây lo lắng không cần thiết hoặc có khả năng quấy rối, làm khó chịu,
            xấu hổ, xúc phạm hoặc làm phiền người khác; hoặc tạo ấn tượng rằng
            thông tin là bắt nguồn từ chúng tôi, nhưng thật sự lại không đúng
            như vậy.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default PrivacyPolicyScreen;
