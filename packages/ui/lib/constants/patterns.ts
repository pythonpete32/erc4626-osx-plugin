
/**
 * NumberPattern is a pattern for positive floats. See the test cases for examples
 */
export const NumberPattern = /^\d+\.?\d*$/;

/**
 * Pattern for positive integers.
 */
export const IntegerPattern = /^\d+$/;

/**
 * Pattern for possibly singned integers (negative or positive).
 */
export const SignedIntegerPattern = /^[+-]?\d+$/;

/**
 * AddressPattern is a pattern for Addresses, starting with 0x, followed by 20 to 60 hex characters.
 * See the test cases for examples.
 */
export const AddressPattern = /^0x[a-fA-F0-9]{20,60}$/;

/**
 * UrlPattern is a pattern for urls. See the test cases for examples.
 *  taken from: https://urlregex.com/
 */
export const UrlPattern = /^(https?:\/\/)?[\w\-._~:/?#[\]@!$&'()*+,;=%]+$/;

/**
 * Pattern for github pull requests, following http://github.com/${repository_name}/pull/${digit}
 */
export const GithubPullRequestPattern =
  /^(https:\/\/github.com\/.+\/.+\/pull\/\d+)$/;

export function patternToString(pattern: RegExp): string {
  return pattern.toString().slice(1, -1);
}
