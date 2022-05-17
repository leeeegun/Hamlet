package com.hamlet.model;

public enum MessageType {
    JOIN,
    LEAVE,

    /* START에서 return하는 type, 문제 CATEGORY를 정해 줌. */
    CATEGORY_MULTIPLE,
    CATEGORY_ANSWER,
    CATEGORY_VOTE,
    CATEGORY_SURVEY,


    /* 정답을 보낼 때 사용 */
    MULTIPLE,
    ANSWER,
    VOTE,
    SURVEY,

    SETTING,
    START,
    NEXT,
    RANKING,
    FINISH,
    END,
}
