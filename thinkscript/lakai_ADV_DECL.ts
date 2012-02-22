#ADV-DECL Histrogram
#By lakai http://www.tradeitdontdateit.com

declare lower;
plot data = close("$advn")/close("$decn");
plot data2 = close("$decn")/close("$advn");
plot ZeroLine = 1;    
plot Diff = data;
plot Diff2 = data2;
diff.AssignValueColor(if Diff >= 1 then Color.UPTICK else Color.DOWNTICK);
Diff.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
diff2.AssignValueColor(if Diff2 >= 1 then Color.downtick else Color.upTICK);
Diff2.SetPaintingStrategy(PaintingStrategy.HISTOGRAM);
ZeroLine.SetDefaultColor(color.DARK_GRAY);
data.SetDefaultColor(color.green);
data2.SetDefaultColor(color.red);
