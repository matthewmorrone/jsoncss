/**
 * Handle `extend` property.
 *
 * @param {Rule} rule
 * @api public
 */
export default function jssExtend() {
  return rule => {
    if (!rule.style || !rule.style.extend) return

    function extend(newStyle, style) {
      if (typeof style.extend == 'string') {
        if (rule.options && rule.options.sheet) {
          const refRule = rule.options.sheet.getRule(style.extend)
          if (refRule) extend(newStyle, refRule.originalStyle)
        }
      }
      else if (Array.isArray(style.extend)) {
        for (let index = 0; index < style.extend.length; index++) {
          extend(newStyle, style.extend[index])
        }
      }
      else {
        for (const prop in style.extend) {
          if (prop === 'extend') extend(newStyle, style.extend.extend)
          else newStyle[prop] = style.extend[prop]
        }
      }

      // Copy base style.
      for (const prop in style) {
        if (prop !== 'extend') newStyle[prop] = style[prop]
      }

      return newStyle
    }

    rule.style = extend({}, rule.style)
  }
}
