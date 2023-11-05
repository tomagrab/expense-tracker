import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { GlobalStyles } from "../../../constants/Styles/GlobalStyles/GlobalStyles";

type faButtonProps = {
  icon: IconProp;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function FaButton({ icon, onPress, style }: faButtonProps) {
  return (
    <Pressable onPress={onPress} style={[style]}>
      <FontAwesomeIcon
        icon={icon}
        style={{
          color: GlobalStyles.text_white.color,
        }}
      />
    </Pressable>
  );
}
