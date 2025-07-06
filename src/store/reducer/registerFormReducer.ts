const INIT_STATE = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const REGISTER_ACTION = {
  CHANGE_INPUT: "CHANGE_INPUT",
  SUBMIT: "SUBMIT",
};

type Action = {
  type: string;
  payload: {
    key: string;
    value: string;
  };
};

type RegisterForm = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const registerReducer = ({
  state,
  action,
}: {
  state: RegisterForm;
  action: Action;
}) => {
  switch (action.type) {
    case REGISTER_ACTION.CHANGE_INPUT:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case REGISTER_ACTION.SUBMIT:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      return state;
  }
};
