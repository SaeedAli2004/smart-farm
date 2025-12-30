import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'إلكترونيات', value: 35, color: 'hsl(142, 71%, 45%)' },
  { name: 'ملابس', value: 25, color: 'hsl(142, 71%, 55%)' },
  { name: 'أثاث', value: 20, color: 'hsl(142, 71%, 65%)' },
  { name: 'أخرى', value: 20, color: 'hsl(142, 71%, 75%)' },
];

const DonutChart = () => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border animate-fade-in" style={{ animationDelay: '300ms' }}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">توزيع المبيعات</h3>
        <p className="text-sm text-muted-foreground">حسب الفئة</p>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '12px',
                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
              }}
              formatter={(value: number) => [`${value}%`, 'النسبة']}
            />
            <Legend 
              verticalAlign="bottom"
              iconType="circle"
              formatter={(value) => <span className="text-foreground text-sm">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DonutChart;
