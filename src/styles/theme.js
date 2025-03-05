const Theme = {
  colors: {
    white: '#FFFFFF',
    black: '#191414',
    primary: '#FFECEC',  // 연핑크 (배경)
    secondary: '#FFFAF5',  
    pink: '#FB01A7',  // 진한 핑크 (강조)
    gray: {
      light: '#B3B3B3',  // 연한 회색 (테두리, 구분선)
      dark: '#535353',  
    },
  },
  fontSize: {
    desktop: {
      xxxs: '16px',
      xxs: '18px',
      xs: '20px',
      sm: '24px',
      m: '28px',
      lg: '30px',
      xl: '32px',
      xxl: '64px',
      xxxl: '92px',
    },
  },
  borderRadius: {
    s: '8px',
    m: '10px',
    l: '12px',
  },
  button: {
    background: '#FFECEC',  // 기본 버튼 배경색 (연핑크)
    text: '#191414',  // 버튼 내부 텍스트 색상 (검정)
    border: '2px solid #B3B3B3',  // 테두리 색상 (연한 회색)
    padding: '1rem 2rem',
    fontSize: '20px', // `fontSize.desktop.xs` 적용 가능
    borderRadius: '12px',  // `borderRadius.l`
    hover: {
      background: '#FB01A7',  // 호버 시 진한 핑크
      text: '#FFFFFF',  // 호버 시 흰색 텍스트
      border: '2px solid #FB01A7',
    },
  },
};

export default Theme;
