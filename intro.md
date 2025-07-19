# Listado Completo de Cambios Necesarios - Sitio Web Invenor

**Fecha:** 2025-07-19  
**Proyecto:** Invenor Investment Platform  
**Prioridad:** CRÍTICA - Datos financieros incorrectos para inversionistas  

---

## 📊 DATOS CORRECTOS DEL EXCEL V5 (BASE DE LA VERDAD)

| Métrica | Valor Correcto | Valor Actual (Incorrecto) |
|---------|---------------|---------------------------|
| **ROI** | 49% | 55% ❌ |
| **Payback** | 26 meses | 15 meses ❌ |
| **Capital requerido** | $2,053,200,000 CLP | $2,067,000,000 ❌ |
| **Retorno total** | $3,053,200,000 CLP | $3,100,000,000 ❌ |
| **Ganancia neta** | $1,000,000,000 CLP | Variable ❌ |
| **Tasa anual equivalente** | 20.1% | Variable ❌ |
| **Municipalidades** | 12 iniciales | 12 ✅ |
| **Cruces** | 20 iniciales | 20 ✅ |
| **Porcentaje Invenor** | 70% | Variable ❌ |
| **Precisión IA** | 95% | 95% ✅ |

---

## 🚨 ARCHIVOS CRÍTICOS A ACTUALIZAR (ORDEN DE PRIORIDAD)

### **PRIORIDAD 1: FUENTE CENTRAL DE DATOS**
```bash
/Users/rodpalacios/Documents/GitHub/Invenor-invest-v2/client/src/data/loadData.ts
```
**Líneas 81-100** - Actualizar todos los valores base que se propagan a otros componentes

### **PRIORIDAD 2: COMPONENTES PRINCIPALES DE DISPLAY**

#### 1. **StatsSection.tsx**
```bash
/Users/rodpalacios/Documents/GitHub/Invenor-invest-v2/client/src/components/StatsSection.tsx
```
**Líneas 22-64:**
- ROI: "55%" → "49%"
- Payback: "15 months" → "26 months"  
- Total Return: "$3.1B" → "$3,053,200,000 CLP"

#### 2. **Hero.tsx**
```bash
/Users/rodpalacios/Documents/GitHub/Invenor-invest-v2/client/src/components/Hero.tsx
```
**Líneas 15-20:**
- ROI: "55%" → "49%"
- Return: "$3.1B" → "$3,053,200,000 CLP"

#### 3. **InvestmentOpportunity.tsx**
```bash
/Users/rodpalacios/Documents/GitHub/Invenor-invest-v2/client/src/components/InvestmentOpportunity.tsx
```
**Líneas 118-136:**
- Initial: "$2.067 Billones" → "$2,053,200,000 CLP"
- Return: "$3.096 Billones" → "$3,053,200,000 CLP"  
- ROI: "55%" → "49%"

### **PRIORIDAD 3: COMPONENTES SECUNDARIOS**

#### 4. **ComparisonMatrix.tsx**
```bash
/Users/rodpalacios/Documents/GitHub/Invenor-invest-v2/client/src/components/ComparisonMatrix.tsx
```
**Líneas 45-52:**
- ROI: "55%" → "49%"
- Payback: "15 months" → "26 months"

#### 5. **InvestmentSimulator.tsx**
```bash
/Users/rodpalacios/Documents/GitHub/Invenor-invest-v2/client/src/components/InvestmentSimulator.tsx
```
**Líneas 8-33:**
- ROI: "55%" → "49%"
- Payback: "15 months" → "26 months"
- Revenue: "$2.1B CLP" → Actualizar según Excel V5

#### 6. **IntroSection.tsx**
```bash
/Users/rodpalacios/Documents/GitHub/Invenor-invest-v2/client/src/components/IntroSection.tsx
```
**Líneas 51-52:**
- ROI: "55%" → "49%"
- Payback: "15 months" → "26 months"

#### 7. **DataRoomDashboard.tsx**
```bash
/Users/rodpalacios/Documents/GitHub/Invenor-invest-v2/client/src/components/DataRoomDashboard.tsx
```
**Líneas 28-31:**
- Base scenario ROI: "55%" → "49%"

#### 8. **Indicators.tsx**
```bash
/Users/rodpalacios/Documents/GitHub/Invenor-invest-v2/client/src/components/Indicators.tsx
```
**Líneas 61-75:**
- Ajustar todos los escenarios de ROI con 49% como base

---

## 📱 ELEMENTOS DE UI IDENTIFICADOS EN SCREENSHOTS

### **Página Principal (Home)**
- [ ] Hero section: "55% ROI Garantizado En 24 meses" → "49% ROI en 26 meses"
- [ ] Investment cards: "55% ROI" → "49% ROI"
- [ ] Summary metrics: "54% ROI Garantizado" → "49% ROI"

### **Sección de Métricas**
- [ ] "Métricas Clave": "15 meses payback" → "26 meses payback"
- [ ] "55% ROI Proyectado" → "49% ROI Proyectado"
- [ ] Tablas de comparación: Todos los valores financieros

### **Modal de Detalles de Inversión**
- [ ] "15 meses payback" → "26 meses payback"
- [ ] "42% IRR anual" → Verificar consistencia con 49% ROI
- [ ] Todos los montos de inversión y retorno

### **Sección de Análisis de Riesgos**
- [ ] "ROI 55% respaldado por contratos" → "ROI 49%"
- [ ] "payback 15 meses" → "payback 26 meses"

---

## 📈 DATOS ESPECÍFICOS DEL EXCEL V5 PARA IMPLEMENTAR

### **Hoja "Indicadores" - Datos Base:**
- Capital requerido: $2,053,200,000 CLP
- Tiempo de inversión: 26 meses  
- Retorno total: $3,053,200,000 CLP
- Ganancia neta: $1,000,000,000 CLP
- ROI: 49%
- Tasa anual equivalente: 20.1%
- Múltiplo de inversión: 1.49x
- Ganancia mensual promedio: $38,461,538 CLP

### **Hoja "Cashflow" - Flujo de Caja:**
- Mes 26: Pago completo al inversionista
- Flujo operativo desde mes 6
- Pago parcial desde mes 9

### **Hoja "Escenarios Proyectados" - Proyecciones:**
- Año 1: 12 municipalidades, 20 cruces
- Año 2: 12 municipalidades, 30 cruces  
- Año 3: 15 municipalidades, 70 cruces
- Precisión IA: 95%
- Porcentaje Invenor: 70%

---

## ⚡ ACCIONES INMEDIATAS REQUERIDAS

### **PASO 1: Actualizar Fuente Central (loadData.ts)**
```typescript
// Valores a cambiar en loadData.ts
const investmentData = {
  roi: 49, // antes 55
  paybackMonths: 26, // antes 15
  initialCapital: 2053200000, // en CLP
  totalReturn: 3053200000, // en CLP
  netProfit: 1000000000, // en CLP
  annualRate: 20.1,
  multiplier: 1.49
}
```

### **PASO 2: Verificar Cascada de Cambios**
- Confirmar que componentes que consumen loadData.ts se actualicen automáticamente
- Revisar componentes con valores hardcodeados

### **PASO 3: Testing de Consistencia**
- Verificar formato de moneda CLP vs M$ vs B
- Confirmar cálculos derivados
- Probar responsive design con números más largos

### **PASO 4: Validación Final**
- Comparar con Excel V5 línea por línea
- Screenshot comparison antes/después
- Testing en ambiente de producción

---

## 🔍 COMPONENTES ADICIONALES A REVISAR

```bash
# Otros componentes que podrían contener referencias financieras:
/client/src/components/FAQ.tsx
/client/src/components/InvestorCredibility.tsx  
/client/src/components/Timeline3D.tsx
/client/src/components/InteractiveMap3D.tsx
```

---

## 📝 NOTAS IMPORTANTES

1. **Formato de Moneda:** Estandarizar si usar "CLP", "M$", o "Billones"
2. **Precisión:** Mantener exactitud con Excel V5 (no redondear)
3. **Consistencia:** Todos los cálculos derivados deben actualizarse
4. **Testing:** Probar en móvil - números más largos pueden afectar UI
5. **Backup:** Hacer commit antes de cambios masivos

---

## ✅ CHECKLIST DE VALIDACIÓN

- [ ] Excel V5 leído y datos extraídos ✅
- [ ] GitHub repository analizado ✅  
- [ ] Screenshots analizados ✅
- [ ] Listado de cambios generado ✅
- [ ] Prioridades establecidas ✅
- [ ] Archivo central identificado (loadData.ts) ✅
- [ ] 8 componentes críticos mapeados ✅
- [ ] Datos específicos del Excel documentados ✅
- [ ] Plan de implementación definido ✅

**PRÓXIMO PASO:** Iniciar implementación de cambios empezando por `loadData.ts`

---

*Documento generado el 2025-07-19 | Proyecto Invenor | Excel V5 como fuente de verdad*