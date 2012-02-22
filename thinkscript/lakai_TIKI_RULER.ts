#tickruler by popstocks, for 1min chart

declare lower;
input m = 2.0;
def length = 100 * m;
declare zerobase;
input sym = "/es";
input tik = "$tick";

def short = -40;
def long = 40;

def a = Highest(high(sym), length);
def c = Lowest(low(sym), length);
def mark = 100 * (close(sym) - c) / (a - c);

def percentup = 105;
def steady = TotalSum(if 1 == 1 then 1 else 0);
def totalbars = steady + 1;
def markv = (TotalSum(volume(sym)) / totalbars) * ((100 + percentup) / 100);

def aa = Highest(high(tik), length);
def cc = Lowest(low(tik), length);
def tikss = ((if close(tik) < open(tik) then low(tik) else high(tik)) - cc) / (aa - cc);
def tiki = 100 * tikss;

plot mmm = ((mark + tiki) - 100);
plot ZeroLine = 0;

mmm.SetPaintingStrategy(paintingstrategy.histogram);

mmm.AssignValueColor(if mmm > 95 && volume(sym) then color.black else if mmm < short && volume(sym) > markv then color.red else if mmm > long && volume(sym) > markv then color.green else if AbsValue(mmm) > 10 && volume(sym) > markv then color.white 
 else color.dark_gray);

mmm.SetLineWeight(2.0);
mmm.hideBubble();
