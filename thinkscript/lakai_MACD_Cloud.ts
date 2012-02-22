## MACD_Cloud Ribbon
#By lakai http://www.tradeitdontdateit.com


declare lower;

input fastLength = 12;
input slowLength = 26;
input MACDLength = 9;


def fastAvg = ExpAverage(data = close, length = fastLength);

def slowAvg = ExpAverage(data = close, length = slowLength);

plot Value = fastAvg - slowAvg;

plot Avg = ExpAverage(data = Value, length = MACDLength);

plot Diff = value - avg;

AddCloud(Value,Avg);
diff.AssignValueColor(if diff >= 0 then Color.UPTICK else Color.DOWNTICK);

Diff.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);

plot ZeroLine = 0;

Diff.SetDefaultColor(GetColor(5));
Avg.SetDefaultColor(GetColor(8));
Value.SetDefaultColor(GetColor(1));
ZeroLine.SetDefaultColor(GetColor(0));
