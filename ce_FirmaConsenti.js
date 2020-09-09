/**
* @NApiVersion 2.x
* @NScriptType ClientScript
* @NModuleScope Public
*/
define(['N/record', 'N/url', 'N/https', 'N/ui/dialog'],
  function (record, url, https, dialog) {
    var canvas = null;
    var canvasMed = null;
    var canvasTestigo1 = null;
    var canvasTestigo2 = null;
    var img = null;
    var caseId = null;
    var modal = null;
    var type_rinoseptoplastia = null;
    var questionsCheckbox = [];
    var maxCounter = 0;
    var field_firmaNula = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAPF0lEQVR4nO2df5RcZXnHv8+duzubbaJsANFkQ4ibTQKIJiX0oCKw0HgUJMA5dT3ZmXs3k1W3/EgCtViKCCOihBI0CUq71mSY+96ZOZ3Tom1SixzCKpJEDFLhiOaXaQiLRdNkxRCys3PnffrH3knvzs6Pe2dmf53ezzlzMu/v5+aZ98fzvO97F/Dx8fHx8fHx8fHx8fGpiWQyeY5hGH8y2XJUC022APUglUrNyWazdxHRpwHMBWAxs3H69Om1vb2970y2fF5QJ1uAWmBmSiQS6y3L+ioRzXQkqUS0prm5eQaArsmSrxqmbQ9Jp9MzM5lMAsDKMtnYsqw5kUjkzYmSq1aUyRagGuLx+NlDQ0M7UV4ZAECqql4yETLVi2mpEMuyhgHsBpCrlJeZG8ZfovoxLRXS09NzUtf1OxVFWc7MPyuXV0r52kTJVQ+mpULyhEKhXxw+fPjDAHoB/LFYnubm5mmlkGkzqZumuZmZG4LB4L2dnZ0nCtNTqdS8bDb7GBHd6Ig+oGna4gkUs2amhUKEEJ0A/skODgL4SjAY/FZnZ+eYOcQwjBuI6FsAzgfw95qm3TqBotbMlB+yhBCLAXzXEdUCYFMmk3khHo9/uDC/ruvbh4eHPwBgM4CnJ0jMujGle0g6nZ6RyWR2A1haIgsTkakoyl1dXV2/m0jZxosp3UOGh4cfR2llAAAxs5bL5X4jhIim0+nGiZJtvJjUHhKLxc5qaGhoBxAIh8M/daYJIT4L4B+91EdErxLR2lAo1F9POSeScVfI1q1bZzU2NrYTUTuAhczcTkSLmLkdwDkAMoqiXB4KhX6RLyOE+BCAPQBmVNMmM0d0XX+iHvJPNHVzLvb396tHjx69OhAILJdSthPRQgCLALwXAJj5TF7ndwD3OJVhu87TqFIZAN5RVfU/qiw76dRFIYZhnD8wMLBdUZQPMjOIXHe8p8Ph8Dc1TTsTQUSbMKLIanl8Ok/wNSskGo0qRPQvAD7osegxAKuJ6Ex3EULcBOCzNYhzipkfcUYYhnEhEd2jqurfrFq16rc11D0h1LzKWrBgwQ0Alnstx8w9mqb9dz4shHgfPE7iRXhc1/XfOyOI6D4AYcuyfi2EuD2dTgdqbGNcqVkhiqL8ldcyzLxN1/XtjjBhxPg7pwZRTjHzRmeEaZoXAei0g+8C8Fgmk9mbSCT+rIZ2xpWaFJJIJC4FcKXHYr/N5XJfcEYIIdYCuK4WWYjo24W9Q0p5H8Y+4zIp5W4hxKatW7fOqqXN8aAmheRyOc+9A8BtkUjkD/mAYRgLiOhrtcgB4JSU8lFnhGmaF9l77MUIAFjf2Ni4Xwih19h2XalaIfF4fG6ZBy6FqWna9/MBe0EQAzCzTJmKMPOjhb2Dme9H5ed7H4C4EGJHLBa7oBYZ6kXVClEUZS0AL7txx7LZ7Kge1dbWdiuAq6qVIV+voihjegeAv/BQx/Wqqv5qKrhfqlKIbbx93ksZIrp1zZo1x/Jh+xf5UDXtF/BAOBwu3Jz6Krw/2wwA92cymReFEB+pg1xVUZVCFEVZgxE3uFv+LRwO/3M+wMykqmofahyqABwOBoPfcUaYpnk5M99cQ52XAHjeNE0jmUzWsuqrCs8KiUajCjOv81DkHcuy1jsjTNP8HICPe227EGa+u7Ozc7ggbiNq99HlvcivmqYZrrEuxGKxplgs9l5XDXutPB6P36goyvcr57QbILo3HA6fWUUlk8nzcrncPgBneW27oN49oVDoo05L3zTNm5n5yVrqLcFOKeWt3d3dB0pliEajyvz5889vaGhYxMyLACwGsMh2pJ4P4ClN066v1JBn14lHQ/DAiRMnRhlruVxuI2pUBgAJYL1TGf39/erAwEA95qRiXKsoystCiA2Dg4Mb1q1bl3EmCiHuAvAAgKYCx6nTkepqb9/TkOXVEGTmO53CCyGuBhDy0mYxiMgIh8N7nXEDAwN/CZcPXSVNAKItLS2vmKb50YK0t+z0clywZcuWYKVGPCnEiyHIzDt0Xf9BPmwvJx9H7eP7SWa+xxmRTqdnA4jWWK9bFkkp7y6IKzmUOQjMnj27rVIm1woxTbPVgyE4zMyj3CNDQ0N3ALjQEXWMmTcx8/UA5gRHOJuZLyeidQC+h5ETJoV8zemUBIBMJvMggLPdPkutENGo7QHLsva5KSelXFIpj+s5hJlvR2VD8DiAPgAvOCfAVCo1x7KsL9vB0wAetCzrG5FIZKig/AkAL9ifx6LRqNLe3r5MSnkNgA4AcwYHBzc5C9i7i55sojqwoK+vr6G3tzcLAJFI5E0hxFsA3l2hXMUh1ZVC7JPmbh76LU3TvlQYaVnW32HE5nhNUZSbnDuE5YhGoxLAz+3PIyWybcaIb2oiaWhqaloAx1DFzPuJqKwXmYgqKsTVkJXJZFbDnSE4xpAyDOMKjNzReDOXy13rVhluEEIsZubz6lWfFwKBwKhhS1GU/S6K1d5DotGoAmB9pXw2Y36pRLTF/hpZvXr1bwrTbW/vSowIe4qZX2HmZ7u7u9+o1JimafsBXJhKpeZZlvXnAFYAuBbAe1zKWzVSynZnmJndzCO1K6StrW0lgIUuGgMAyxmwD7otY+Z/1XX9KWdaX19fc3Nz8zcxsmV7pqcSEYgIhmHsUxRlJ4CdRPSjUChUbIIHAKxatep1ADEAMftW1XIp5aeI6FMAlmEcTtcoilK47++mh7Qkk8nzyu35u5lD7nSRJ88xZ+Dtt9+e2dDQgEAgsNkZv2XLlmBzc/MPAVxRqiIiWsLMSwDcxsw5IcRLRPQMgJ3ZbHZXkQVBvhwD2Gt/7jdN80vM/KCHZ3CFbY07w/vdHO5g5sUAqlOIYRjL4cEQJKIjznAwGDxLSvnHOXPm/MQZ39LS8hWUUUYRAgAuY+bLAPytqqpDQohdzLxTUZRnGhsbXyp28PqJJ55oY+ZCm6FejFJILpc7pKpqDhUWGLZCniuVXmlS99I7IKX8r4LwXAA/7ejoODOUmab5LgBrvdRbhCYA1xLR15n5Z5lM5pgQ4knDMG5LJpNLACCdTgcCgUActXuUSzHXef3a7rEV76JIKcvOIyV7iGmarczsaUewsIcw8zwiGnXhUkp5FRE1e6nXBS0Abiaim3O5HIQQb2QymUMACl0c9YTsw4AvO+L2A3h/hXJlFVKuh3jdEQRGCwciuhgjhqAzrtVjndUwF7XvRFakcB4BUHGlVckWKaqQdDo9k5k/50E2AJDBYHBPQeNLMbJv7Yx7y2O9U5YqV1oLym0TF1VIJpO5Ed52BAHgV86rZsxMzPynAC52ZpJSPg+ACwtPR+wD407cKEQdGhoq6WQsNWRV3EgpwqiVgxBiCYBzAbTlJ1oA0HX9KIAdVdQ/5Sh0MsKdQqAoSkknYymFXORWqDxSylHXx4jo6vx3y7J6nWm2o/J/vLYx1SicQ2wvtJshueQ8UkohwyXiS5G1LOvZgrib8l+IqDeVSs3Lh3VdP8rMHXC3jzCVOTsejxe6/d08kzeFEJEr/76D3T09PSfzgWQyeR6AaxzpMyzLSvb3959ZZuu6/kvLsj5kbzadxDQlEAiMmkdc/t95U4iU8sce5TILyndirI1zxeuvvx7v6+s7s5SORCJDuq4/ZD/Ud+DiVRlTjSJL34rzSDnjsKhCstlsGiXejFCEY8ycckYwc9E7HkTU1dzcvCMej891xnd1df1O07ReZl5KRD902e6UoBqFENHsbdu2nVssrahCenp6ThLRvS5l+mtd10/lA0KIFSh/eefjiqK8KoT4vH0N4Qy6rv8yHA5/AsAniehVl+1PKlXaIlBVtWgvKWmpHzp06NvMnKxQ78Oaphn5gD1HbCyTP8+7AWxJpVJFhdI07am5c+cuZeZbAPy+WJ6pQqEtks1mD2LkmFIlvCkkGo3K06dPrwZwF4CDThkA7AJwo6ZpozypAwMDG+HyahsR3d3V1VVyAuzo6LB0Xf8HImpn5g0AirrbpwDtzp7u1slYyoXieuMmnU7PyGaz7zl+/PibhQfFAMAwjB4i+m6xsoUw8w5N01Y6D7pVIpFIzJdSbgDwGS9yTwRENC8cDg/kw0KIHwD4ZIVi2zVNG/MCNtenTjo7O0+jjOaJ6EWMbApdVqGqN1RVjXhRBgCEQqHXAKwyTfMbzPwogI95KT+e2HfwBxxRB1BZIUVvGtft1Rqapr3c2tr6EQB3AHi7RDbJzHpXV1fVVno4HN6radqVzLwSwJg9+slASlnNxN7mNAHyVHs/5CrDMLTCVVJHR4eladpmy7IuAVDs8v4Duq4XWvRVoev69sHBwYsBfBHu3BXjSeEJFDfGoTpr1qwxTsaqFEJEXURkmKb5I8MwLixMj0QiRzRNu87+FedPjzwXDAbrure9bt26jKZpjwSDwfcDeBjeXT71YtRKy+WRIORyuTHDlmeF2L0i7w2+koheEkJ8uZiPX9f17YqiXMLMj0kpu4rte9eDzs7OE5qm3c3MSwH8+3i0UYQ/YGQUuA/ABmeC/YKCioa1fYhjFJ5XK4lE4lIp5YtFkg5JKW/p7u5+xmud9cYwjGuI6FGUf7WTVw4T0S5m/rmiKM8fPHjwP+2TlUURQuxFhRcq2Pf1e5xxnu+HMPMnSiQtVBTlacMwYsz8xe7u7uNe664Xuq4/G41GL124cOF1zLwWIwfovPz4TgHYy8y7iGhPMBjcU+w9jxXYhwoKKWaLVKOQS8u3QWuI6AbDML6gaZrpdXlbL+xf7w4AO2Kx2AUNDQ3XALjaHtbOsT+MkQPix5n5FSLaA2B3a2vrK86TMtXg8pxW7QohomWFt4SKcC4RPZxMJp+DC6t1vIlEIkcAbLM/E4VzYh8GcMiOO0BEB5h5n5RyzOTvSSGJRKJFSjm/Uj4iOsLMK2xj7v8lqqo+Z1nW9UR0oLW19YjbHudpUo/H48sURXmpQrb9qqqusM/b+njE07I3EAiUvdrLzP3ZbPZjvjKqx5NCpJSlLtIzET3U1NS0wvm2Bh/veJ3Uix3weo2IbgmHw9P2PYdTCdc9xH5zj/Ov1Zxm5g3MfLGvjPrhuoe0tbXdgf87SfKTQCDw6en8ssmpipc55H7732Fm7vWVMT64VggRPQngJBHdruv6r8dRJh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx+fMfwvMKbJjnGKRZQAAAAASUVORK5CYII=';

    var camvasEmpty_pc = "data:image/png;base64,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";

    var camvasEmpty_iPad = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAB9KADAAQAAAABAAAB9AAAAAB3bs6AAAARIUlEQVR4Ae3QgQAAAADDoPlTH+SFUGHAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDLwMDRRUAAfTgT5UAAAAASUVORK5CYII=';

    function pageInit(context) {
      img = document.createElement('canvasCaso');
      var plataforma = navigator.platform;
      if (plataforma == 'MacIntel' || plataforma == 'iPad') {
        camvasEmpty = camvasEmpty_iPad;
        document.getElementById('sig-canvas2').src = camvasEmpty_iPad;
        document.getElementById('sig-canvas').src = camvasEmpty_iPad;
        document.getElementById('sig-canvas-testigo1').src = camvasEmpty_iPad;
        document.getElementById('sig-canvas-testigo2').src = camvasEmpty_iPad;
      } else {
        camvasEmpty = camvasEmpty_pc;
        document.getElementById('sig-canvas2').src = camvasEmpty_pc;
        document.getElementById('sig-canvas').src = camvasEmpty_pc;
        document.getElementById('sig-canvas-testigo1').src = camvasEmpty_pc;
        document.getElementById('sig-canvas-testigo2').src = camvasEmpty_pc;
      }
      try {
        caseId = document.getElementById('recordCaseId').value;
        objRecord = record.load({ type: 'SUPPORTCASE', id: caseId, isDynamic: true });
        field_type_rinoseptoplastia_value = objRecord.getValue({ fieldId: 'custevent1181' }) || null;
        if (field_type_rinoseptoplastia_value != null ) {
          document.getElementById('typeRinoplastia').value =  field_type_rinoseptoplastia_value;
          field_type_rinoseptoplastia_value = parseInt(field_type_rinoseptoplastia_value);
          console.log(field_type_rinoseptoplastia_value);
          if (field_type_rinoseptoplastia_value > 0) {
            document.getElementById("typeRinoplastia").disabled = true;
          }
        }
      } catch (error) {
        log.debug('Error', 'error pageInit Firma Consentimiento' + error);
      }
    }

    function enviarFirmas() {
      //VARIABLES: type_rinoseptoplastia_value ->
      var type_rinoseptoplastia_value = 0;

      canvas = document.getElementById('sig-canvas2');
      canvasMed = document.getElementById('sig-canvas');
      canvasTestigo1 = document.getElementById('sig-canvas-testigo1');
      canvasTestigo2 = document.getElementById('sig-canvas-testigo2');
      type_rinoseptoplastia = document.getElementById('typeRinoplastia');

      caseId = document.getElementById('recordCaseId').value;
      objRecord = record.load({ type: 'SUPPORTCASE', id: caseId, isDynamic: true });
      field_firmaClienteBase64 = objRecord.getValue({ fieldId: 'custevent269' }) || null;
      field_firmaMedBase64 = objRecord.getValue({ fieldId: 'custevent485' }) || null;
      field_tipoRinoseptoplastia = objRecord.getValue({ fieldId: 'custevent1181' }) || null;
      subsidiaria = objRecord.getValue({ fieldId: 'subsidiary' }) || null;

      //ACTION: Generador de arreglo para guardar los checkbox que el cliente marca al momento de generar la firma
      try {
        // Set maxCounter on relation with subsidiary because id ask's  is variable
        if (subsidiaria == '10') {
          maxCounter = 18;
        }
        if (subsidiaria == '6') {
          maxCounter = 7;
        }

        for (counter = 1; counter < maxCounter; counter++) {
          nameElement = "ask_" + counter;
          questionsCheckbox[counter - 1] = document.getElementById(nameElement).checked;
        }
        console.log(questionsCheckbox.toString());
      } catch (error) {
        log.debug('Error', error);
      }

      var validator_procedure_authorization = 0;


      //ACTION: Setea la variable type_rinoseptoplastia_value con un valor por defecto si la subsidiaria es diferente de albya, pero si es albya setea la variable con la información contenida en el campo SELECT con las opciones ABIERTAS y CERRADAS
      if (subsidiaria == "19") {
        type_rinoseptoplastia_value = type_rinoseptoplastia.value;
      } else {
        type_rinoseptoplastia_value = 1;
      }

      var valCanvas = canvas.toDataURL('image/png');
      var valCanvasMed = canvasMed.toDataURL('image/png');
      var valCanvasTestigo1 = canvasTestigo1.toDataURL('image/png');
      var valCanvasTestigo2 = canvasTestigo2.toDataURL('image/png');

      var counterFirmas = 0;

      if (type_rinoseptoplastia_value < 1) {
        dialog.alert({ title: 'Técnica de rinoseptoplastía', message: 'En el formulario falta indicar si la técnica a emplear en el procedimiento es "Abierta" o "Cerrada".' }).then(success);        
      } else {
      if (valCanvas == camvasEmpty && valCanvasMed == camvasEmpty && field_firmaClienteBase64 == null && field_firmaMedBase64 == null) {
        dialog.alert({ title: 'Signatures', message: 'Firma de Paciente o Médico deben ser capturadas' });
      } else {
        //Se graban los base64 en los input ocultos del formulario del caso
        if (valCanvas != camvasEmpty && field_firmaClienteBase64 == null) {
          record.submitFields({ type: 'supportcase', id: caseId, values: { custevent269: valCanvas } });
          counterFirmas += 1;
        }
        if (valCanvasMed != camvasEmpty && field_firmaMedBase64 == null) {
          record.submitFields({ type: 'supportcase', id: caseId, values: { custevent485: valCanvasMed } });
          counterFirmas += 1;
        }
        if (valCanvasTestigo1 != camvasEmpty) {
          record.submitFields({ type: 'supportcase', id: caseId, values: { custevent548: valCanvasTestigo1 } });
          counterFirmas += 1;
        }
        if (valCanvasTestigo2 != camvasEmpty) {
          record.submitFields({ type: 'supportcase', id: caseId, values: { custevent549: valCanvasTestigo2 } });
          counterFirmas += 1;
        }

        //ACTION: Guarda el string de los valores marcados por el cliente si la subsidiaria es 10 -> Colombia
        if (subsidiaria == '10' || subsidiaria == '6') {
          record.submitFields({ type: 'supportcase', id: caseId, values: { custevent1185: questionsCheckbox.toString() } });
        }

        //ACTION: Guarda el campo de tipo de rinoseptoplastia solo si la subsidiaria es 19 -> albya
        if (subsidiaria == "19") {
          if (type_rinoseptoplastia_value > 0 && field_tipoRinoseptoplastia != null) {
            record.submitFields({ type: 'supportcase', id: caseId, values: { custevent1181: type_rinoseptoplastia_value } });
          }
        }

        if (counterFirmas > 0) {
          if (counterFirmas == 1) {
            dialog.alert({ title: 'Signatures', message: 'Firma Enviada al Caso!!' }).then(successSignatures(caseId));
          } else if (counterFirmas >= 2) {
            dialog.alert({ title: 'Signatures', message: 'Firmas Enviadas al Caso!!' }).then(successSignatures(caseId));
          }
        } else {
          dialog.alert({ tittle: 'Signatures', message: 'No se ha capturado más firmas!!' });
        }
      }
    }
    }

    /**
     * Limpiar los campos de firmas de manera individual
     * Cli -> Cliente
     * Med -> Medico
     * Testigo1 -> Testigo 1
     * Testigo2 -> Testigo 2
     */
    function limpiarFirmaCli() {
      canvas = document.getElementById('sig-canvas2');
      canvas.width = canvas.width;
      document.getElementById('myImgFirmaCli').src = field_firmaNula;
    }

    function limpiarFirmaMed() {
      canvasMed = document.getElementById('sig-canvas');
      canvasMed.width = canvasMed.width;
      document.getElementById('myImgFirmaMed').src = field_firmaNula;
    }

    function limpiarFirmaTestigo1() {
      canvasTestigo1 = document.getElementById('sig-canvas-testigo1');
      canvasTestigo1.width = canvasTestigo1.width;
      document.getElementById('myImgFirmaTestigo1').src = field_firmaNula;
    }

    function limpiarFirmaTestigo2() {
      canvasTestigo2 = document.getElementById('sig-canvas-testigo2');
      canvasTestigo2.width = canvasTestigo2.width;
      document.getElementById('myImgFirmaTestigo2').src = field_firmaNula;
    }

    /**
     * Funciones para pintar las firmas en las variables que guardan los archivos en base64
     */
    function abrirModal() {
      var touchMove = function (e) {
        e.preventDefault();
      };
      document.addEventListener('touchmove', touchMove, { passive: false });
      modal = document.getElementById('myModal');

      modal.style.display = "block";

      var cerrarCanvas = function (e) {
        e.preventDefault();
        canvas = document.getElementById('sig-canvas2');
        var base64imgCli = canvas.toDataURL('image/png');
        if (base64imgCli != camvasEmpty) {
          document.getElementById('myImgFirmaCli').src = base64imgCli;
        } else {
          document.getElementById('myImgFirmaCli').src = field_firmaNula;
        }
        document.removeEventListener('touchmove', touchMove);
        document.getElementById('btn_cerrarFirmaPaciente').removeEventListener('click', cerrarCanvas);
        modal.style.display = "none";
      }
      document.getElementById('btn_cerrarFirmaPaciente').addEventListener('click', cerrarCanvas, { passive: false });
    }

    function abrirModalMed() {
      var touchMove = function (e) {
        e.preventDefault();
      };
      document.addEventListener('touchmove', touchMove, { passive: false });
      modal = document.getElementById('myModalM');

      modal.style.display = "block";

      var cerrarCanvas = function (e) {
        e.preventDefault();
        canvasMed = document.getElementById('sig-canvas');
        var base64imgMed = canvasMed.toDataURL('image/png');
        if (base64imgMed != camvasEmpty) {
          document.getElementById('myImgFirmaMed').src = base64imgMed;
        } else {
          document.getElementById('myImgFirmaMed').src = field_firmaNula;
        }        
        document.removeEventListener('touchmove', touchMove);
        document.getElementById('btn_cerrarFirmaMedico').removeEventListener('click', cerrarCanvas);
        modal.style.display = "none";
      }
      document.getElementById('btn_cerrarFirmaMedico').addEventListener('click', cerrarCanvas, { passive: false })
    }

    function abrirModalTestigo1() {
      var touchMove = function (e) {
        e.preventDefault();
      };
      document.addEventListener('touchmove', touchMove, { passive: false });
      modal = document.getElementById('myModalT1');

      modal.style.display = "block";

      var cerrarCanvas = function (e) {
        e.preventDefault();
        canvasTestigo1 = document.getElementById('sig-canvas-testigo1');
        var base64imgTestigo1 = canvasTestigo1.toDataURL('image/png');
        if (base64imgTestigo1 != camvasEmpty) {
          document.getElementById('myImgFirmaTestigo1').src = base64imgTestigo1;
        } else {
          document.getElementById('myImgFirmaTestigo1').src = field_firmaNula;
        }        
        document.removeEventListener('touchmove', touchMove);
        document.getElementById('btn_cerrarFirmaTestigo1').removeEventListener('click', cerrarCanvas);
        modal.style.display = "none";
      }
      document.getElementById('btn_cerrarFirmaTestigo1').addEventListener('click', cerrarCanvas, { passive: false });
    }

    function abrirModalTestigo2() {
      var touchMove = function (e) {
        e.preventDefault();
      };
      document.addEventListener('touchmove', touchMove, { passive: false });
      modal = document.getElementById('myModalT2');

      modal.style.display = "block";

      var cerrarCanvas = function (e) {
        e.preventDefault();
        canvasTestigo2 = document.getElementById('sig-canvas-testigo2');
        var base64imgTestigo2 = canvasTestigo2.toDataURL('image/png');
        if (base64imgTestigo2 != camvasEmpty) {
          document.getElementById('myImgFirmaTestigo2').src = base64imgTestigo2;
        } else {
          document.getElementById('myImgFirmaTestigo2').src = field_firmaNula;
        }
        document.removeEventListener('touchmove', touchMove);
        document.getElementById('btn_cerrarFirmaTestigo2').removeEventListener('click', cerrarCanvas);
        modal.style.display = "none";
      }
      document.getElementById('btn_cerrarFirmaTestigo2').addEventListener('click', cerrarCanvas, { passive: false });
    }

    /**
     * SUPPORT FUNCTIONS AREA
     */
    function success() {
      document.getElementById('scrollhere').scrollIntoView();
      type_rinoseptoplastia.focus();
    }
    function successSignatures(caseId) {
      var output = url.resolveRecord({ recordType: 'supportcase', recordId: caseId, isEditMode: false });
      window.open("" + output + "", "_self");
    }

    return {
      pageInit: pageInit,
      enviarFirmas: enviarFirmas,
      limpiarFirmaCli: limpiarFirmaCli,
      limpiarFirmaMed: limpiarFirmaMed,
      limpiarFirmaTestigo1: limpiarFirmaTestigo1,
      limpiarFirmaTestigo2: limpiarFirmaTestigo2,
      abrirModal: abrirModal,
      abrirModalMed: abrirModalMed,
      abrirModalTestigo1: abrirModalTestigo1,
      abrirModalTestigo2: abrirModalTestigo2
    };
  });