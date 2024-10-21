import '@testing-library/jest-dom';

// Mock TextEncoder/TextDecoder
class TextEncodeMock {
  encode(str) {
    return new Uint8Array([...str].map(char => char.charCodeAt(0)));
  }
}

class TextDecoderMock {
  decode(arr) {
    return String.fromCharCode(...arr);
  }
}

global.TextEncoder = TextEncodeMock;
global.TextDecoder = TextDecoderMock;