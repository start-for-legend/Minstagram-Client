import { accessExp, accessToken } from "../lib/tokens";

export class TokenManager {
  private _accessToken: string | null = null;
  private _accessExp: string | null = null;

  validateToken(token: string | null, tokenExp: string | null) {
    if (!token || !tokenExp) return false;
    const expiredAt = new Date(tokenExp);

    return expiredAt > new Date();
  }

  constructor() {
    this.initToken();
  }

  initToken() {
    this._accessToken = localStorage.getItem(accessToken);
    this._accessExp = localStorage.getItem(accessExp);
  }

  get accessToken() {
    return this._accessToken;
  }
  get accessExp() {
    return this._accessExp;
  }
}
