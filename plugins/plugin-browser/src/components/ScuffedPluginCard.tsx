import { ReactNative as RN, React, stylesheet } from "@vendetta/metro/common";
import { semanticColors } from "@vendetta/ui";
import { Forms } from "@vendetta/ui/components";
import { SuperAwesomeIcon } from "../../../../stuff/types";

const { FormRow } = Forms;

interface propAction {
  icon: number;
  destructive?: boolean;
  onPress: (rerender: () => void) => void;
}

interface props {
  index: number;
  headerLabel: React.JSX.Element | string;
  headerIcon?: number;
  descriptionLabel: string;
  actions?: () => propAction[];
}

const styles = stylesheet.createThemedStyleSheet({
  card: {
    backgroundColor: semanticColors.BACKGROUND_SECONDARY,
    borderRadius: 5,
  },
  header: {
    padding: 0,
    backgroundColor: semanticColors.BACKGROUND_TERTIARY,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  actions: { flexDirection: "row-reverse", alignItems: "center" },
});

export default (props: props) => {
  const [, forceUpdate] = React.useReducer((x) => ~x, 0);

  return (
    <RN.View style={[styles.card, { marginBottom: 10 }]}>
      <FormRow
        style={styles.header}
        label={props.headerLabel}
        leading={props.headerIcon && <FormRow.Icon source={props.headerIcon} />}
      />
      <FormRow
        label={props.descriptionLabel}
        trailing={
          <RN.View style={styles.actions}>
            {props.actions?.().map(({ icon, onPress, destructive }) => (
              <SuperAwesomeIcon
                icon={icon}
                onPress={() => {
                  onPress(() => forceUpdate());
                }}
                style="card"
                destructive={destructive ?? false}
              />
            ))}
          </RN.View>
        }
      />
    </RN.View>
  );
};
