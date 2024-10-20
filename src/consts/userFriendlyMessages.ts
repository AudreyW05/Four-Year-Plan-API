export default {
  success: {
    getOneUser: "Successfully retrieved User.",
    getAllUsers: "Successfully retrieved Users.",
    createUser:
      "Successfully created User(s). Please check your email's inbox (and junk folder) for a confirmation link before signing in.",
    updateUser: "Successfully updated User.",
    deleteUser: "Successfully deleted User(s).",

    signIn: "Successfully signed in.",
    setPassword: "Successfully set password",
    resetPassword: "Successfully reset password.",
  },
  failure: {
    getOneUser: "Error in retrieving User.",
    getAllUsers: "Error in retrieving Users.",
    createUser: "Error in creating User(s).",
    updateUser: "Error in updating User.",
    deleteUser: "Error in deleting User(s).",
    userNotExist: "User does not exist.",

    emailExists: "Email already exists.",
    noAuthToken: "Authorization token not found",
    malformedToken: "Malformed token",
    invalidToken: "Invalid authentication token",
    confirmEmail: "Error in confirming email.",
    emailNotExist: "Email does not exist.",
    passwordConfirmationMismatch:
      "Password and password confirmation does not match.",
    signIn: "Error in signing in.",
    incorrectPassword: "Password is incorrect.",
    setPassword: "Erorr in setting password",
    resetPassword: "Error in resetting password.",
    signUpAttributes: "Error in getting sign up attributes.",
    samePasswordError: "New password and old password cannot be the same",

    invalidPassword:
      "Password must at least be 6 characters long with at least 1 special character (@ $ ! % * # ? &).",
  },
};
