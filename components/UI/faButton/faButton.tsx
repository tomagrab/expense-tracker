import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, StyleProp, ViewStyle } from "react-native";

type faButtonProps = {
  icon: IconProp;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function FaButton({ icon, onPress, style }: faButtonProps) {
  return (
    <Pressable onPress={onPress} style={style}>
      <FontAwesomeIcon icon={icon} />
    </Pressable>
  );
}
