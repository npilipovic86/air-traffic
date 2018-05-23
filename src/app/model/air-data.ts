export interface Air {
    src: number;
    feeds?: (FeedsEntity)[] | null;
    srcFeed: number;
    showSil: boolean;
    showFlg: boolean;
    showPic: boolean;
    flgH: number;
    flgW: number;
    acList?: (AcListEntity)[] | null;
  }
  export interface FeedsEntity {
    id: number;
    name: string;
    polarPlot: boolean;
  }
  export interface AcListEntity {
    Id: number;
    Rcvr: number;
    HasSig: boolean;
    Sig: number;
    Icao: string;
    Bad: boolean;
    Reg: string;
    FSeen: string;
    TSecs: number;
    CMsgs: number;
    Alt: number;
    GAlt: number;
    InHg: number;
    AltT: number;
    Call: string;
    Lat: number;
    Long: number;
    PosTime: number;
    Mlat: boolean;
    Tisb: boolean;
    Spd: number;
    Trak: number;
    TrkH: boolean;
    Type: string;
    Mdl: string;
    Man: string;
    CNum: string;
    From: string;
    To: string;
    Op: string;
    OpIcao: string;
    Sqk: string;
    Help: boolean;
    Vsi: number;
    VsiT: number;
    Dst: number;
    Brng: number;
    WTC: number;
    Species: number;
    Engines: string;
    EngType: number;
    EngMount: number;
    Mil: boolean;
    Cou: string;
    HasPic: boolean;
    Interested: boolean;
    FlightsCount: number;
    Gnd: boolean;
    SpdTyp: number;
    CallSus: boolean;
    Trt: number;
    Year: string;
  }