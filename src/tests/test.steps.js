import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('features/test.feature');

defineFeature(feature, (test) => {
  beforeEach(() => {
      console.log("before")
  });

  test('cucumber가 동작하는걸 확인하기 위한 파일', ({ given, when, then }) => {
    given('안녕하세요', () => {
        console.log('안녕하세요');
    });

    when('하이', () => {
        console.log('hi');
    });

    then('굿굿', () => {
        console.log('good good');
    });
  });
});
