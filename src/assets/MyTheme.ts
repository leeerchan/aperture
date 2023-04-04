import { ThemeConfig, theme} from 'antd';


const MyTheme: ThemeConfig = {
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: "#00ccbb",
      colorSuccess: "#00cc66",
      colorError: "#cc2d00",
      colorInfo: "#00ccbb",
      colorPrimaryHover: "#2fd5c2",
      borderRadius: 8,
      wireframe: false
    }
}

export default MyTheme;