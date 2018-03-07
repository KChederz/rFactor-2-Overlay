import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    constructor() {}

    getConfig(): any {
        return config;
    }
}

const config = {
    teams: {
        "krt": {
            "colour": "#e01b25"
        },
        "sabre racing": {
            "colour": "#07b5f1"
        },
        "defiance racing": {
            "colour": "#a000d2"
        },
        "disruptive tech racing": {
            "colour": "#3c3c3d"
        },
        "acr zakspeed": {
            "colour": "#e8e8e8"
        },
        "zesty racing": {
            "colour": "#e28c28"
        },
        "idos motorsport": {
            "colour": "#000000"
        },
        "vi race team": {
            "colour": "#e5e5e5"
        },
        "s2 racing": {
            "colour": "#002b91"
        } 
    },
    drivers: {
        "kieran chadwick": {
            "flag": "https://imgur.com/4yAOniI.png"
        },
        "craig baxter": {
            "flag": "https://imgur.com/0apJFaG.png"
        },
        "scott davison": {
            "flag": "https://imgur.com/4yAOniI.png"
        },
        "evan rice": {
            "flag": "https://imgur.com/lqEcsyy.png"
        },
        "sam carpenter": {
            "flag": "https://imgur.com/4yAOniI.png"
        },
        "cian white": {
            "flag": "https://imgur.com/Wno1zTe.png"
        },
        "mac shepherd": {
            "flag": "https://imgur.com/4yAOniI.png"
        },
        "kevin cox": {
            "flag": "https://imgur.com/4yAOniI.png"
        },
        "ross woodford": {
            "flag": "https://imgur.com/4yAOniI.png"
        },
        "tino naukkarinen": {
            "flag": "https://imgur.com/VIJffgO.png"
        },
        "dan-ove brantholm": {
            "flag": "https://imgur.com/pnoBMKg.png"
        },
        "vincent evers": {
            "flag": "https://imgur.com/fhXmGJQ.png"
        },
        "adam cronin": {
            "flag": "https://imgur.com/4yAOniI.png"
        },
        "jordy zwiers": {
            "flag": "https://imgur.com/fhXmGJQ.png"
        },
        "brandon ohenlen": {
            "flag": "https://imgur.com/4yAOniI.png"
        },
        "dominic lambrechts": {
            "flag": "https://imgur.com/4yAOniI.png"
        },
        "jacob reid": {
            "flag": "https://imgur.com/4yAOniI.png"
        },
        "dionysis faraos": {
            "flag": "https://imgur.com/YsHTDTe.png"
        },
        "sulaiman bah": {
            "flag": "https://imgur.com/lqEcsyy.png"
        },
        "gerrit de vries": {
            "flag": "https://imgur.com/fhXmGJQ.png"
        },
        "tomi ylitalo": {
            "flag": "https://imgur.com/VIJffgO.png"
        },
        "callum roberts": {
            "flag": "https://imgur.com/4yAOniI.png"
        },
        "andrew smith": {
            "flag": "https://imgur.com/4yAOniI.png"
        },
        "kevin turner": {
            "flag": "https://imgur.com/wfwSvVC.png"
        },
        "max huss": {
            "flag": "https://imgur.com/4yAOniI.png"
        },
        "edgaras gudaitis": {
            "flag": "https://imgur.com/4yAOniI.png"
        },
        "noah chilla": {
            "flag": "https://imgur.com/uXTuiD0.png"
        },
        "jukkapekka lalu": {
            "flag": "https://imgur.com/VIJffgO.png"
        },
        "rik van doorn": {
            "flag": "https://imgur.com/fhXmGJQ.png"
        },
        "martin pankratov": {
            "flag": "https://imgur.com/4yAOniI.png"
        },
        "thomas lagny": {
            "flag": "https://imgur.com/o3kblwK.png"
        },
        "jamie pounder": {
            "flag": "https://imgur.com/4yAOniI.png"
        },
        "damian hall": {
            "flag": "https://imgur.com/wfwSvVC.png"
        },
        "ismael nadire": {
            "flag": "https://imgur.com/o3kblwK.png"
        },
        "frank godrecki": {
            "flag": "https://imgur.com/3oTIESg.png"
        }
    }
}