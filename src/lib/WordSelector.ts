import prompts from 'prompts';
import _ from 'prompts';

class WordSelector {
  static run() {
    const questions: any = {
      type: 'list',
      name: 'words',
      message: '단어를 입력해주세요.',
      initial: '사과, 망고, 바나나, 포도, 오렌지',
      separator: ','
    };

    (async () => {
      const response = await prompts(questions)
      let rs = response.words
      let ran = Math.floor(Math.random() * rs.length)

      console.log(`결과: ${rs[ran]}`)
    })()
  }
}

export default WordSelector