// Định nghĩa kiểu cho Theme
interface Theme {
    colors: {
      white: string;
      black: string;
      grayBG: string;
      neutral: (opacity: number) => string;
    };
    frontWeights: {
      medium: any;
      semibold: any;
      bold: any;
    };
    radius: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }
  
  export const theme: Theme = {
    colors: {
      white: '#fff',
      black: '#000',
      grayBG: '#e5e5e5',
      neutral: (opacity: number) => `rgba(10, 10, 10, ${opacity})`,
    },
    frontWeights: {
      medium: "medium",
      semibold: "semibold",
      bold: "bold",
    },
    radius: {
      xs: 10,
      sm: 12,
      md: 14,
      lg: 16,
      xl: 18,
    },
  };
  