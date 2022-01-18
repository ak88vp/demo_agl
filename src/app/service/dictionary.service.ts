import {Injectable} from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionary: Dictionary[] = [
    {
      id: '1',
      name: 'Kỷ Niệm',
      meaningful: 'Kỷ niệm là một cái gì đó rất khó quên, và dẫu thời gian có trôi đến vô vàng, thì kỷ niệm vẩn luôn động lại, là thứ nặng nề nhất, nhưng rồi cũng chỉ là chuyện đã qua mà thôi'
    },
    {
      id: '2',
      name: 'Chia tay',
      meaningful: 'Bạn từ bỏ mối quan hệ nào đó mà bạn xem trọng, một người nào đó bạn cảm thấy yêu thương hết mực mãi mãi và không bao giờ gặp lại. Nhưng khái niệm chia tay hiện nay đối với giới trẻ lại được định nghĩa là sự giả dối.'
    }
  ]

  constructor() {
  }

  getAll() {
    return this.dictionary
  }

  findDictionaryById(id: string) {
    return this.dictionary.find(item => item.id === id)

  }

}
